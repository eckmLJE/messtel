import React, { Fragment } from "react";
import "./Map.css";
import { connect } from "react-redux";

import { setResult, clearResult } from "../actions/map";

import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

mapboxgl.accessToken =
  "pk.eyJ1IjoibHVjYXNlY2ttYW4iLCJhIjoiY2lpYXM0N3E2MDBlYW1vbHp4djNwODN4MyJ9.zJPYOvKeY67m9ab8V5WhwA";

const bounds = [[-77.057553, 38.889569], [-77.006577, 38.912675]];

class Map extends React.Component {
  state = { address: "" };

  map;
  marker;
  

  componentDidMount = () => {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/lucaseckman/cjnnjqyhn0ed12sp1u4am4ewd",
      maxBounds: bounds,
      center: [-77.036536, 38.899009],
      zoom: 13
    });
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      bbox: [-77.057553, 38.889569, -77.006577, 38.912675],
      types: "address"
    });

    geocoder.on("result", this.handleResult);
    geocoder.on("clear", this.handleClear);
    geocoder.on("loading", this.handleClear);
    geocoder.on("error", this.handleClear);
    geocoder.on("results", this.handleClear);

    this.map.addControl(geocoder);
  };

  handleResult = result => {
    this.props.setResult(result);
    this.addMarker(result.result.center);
  };

  genGeoJson = coordinates => ({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: coordinates
        },
        properties: {
          title: "POI",
          description: "Search Result"
        }
      }
    ]
  });

  handleClear = () => {
    this.props.clearResult();
    this.removeMarker();
    let marker = document.querySelector(".marker");
    if (marker) marker.parentNode.removeChild(marker);
  };

  addMarker = coordinates => {
    const geojson = this.genGeoJson(coordinates);
    geojson.features.forEach(marker => {
      let el = document.createElement("div");
      el.className = "marker";
      this.marker = new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map);
    });
  };

  removeMarker = () => {
    if (this.marker) {
      this.marker.remove();
    }
  };

  render() {
    const style = {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "100%"
    };

    return (
      <Fragment>
        <div style={style} ref={el => (this.mapContainer = el)} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setResult: result => dispatch(setResult(result)),
    clearResult: () => dispatch(clearResult())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Map);
