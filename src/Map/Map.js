import React, { Fragment } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

mapboxgl.accessToken =
  "pk.eyJ1IjoibHVjYXNlY2ttYW4iLCJhIjoiY2lpYXM0N3E2MDBlYW1vbHp4djNwODN4MyJ9.zJPYOvKeY67m9ab8V5WhwA";

const bounds = [[-77.057553, 38.889569], [-77.006577, 38.912675]];

export default class Map extends React.Component {
  state = { address: "" };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/lucaseckman/cjnnjqyhn0ed12sp1u4am4ewd",
      maxBounds: bounds,
      center: [-77.036536, 38.902549]
    });
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      bbox: [-77.057553, 38.889569, -77.006577, 38.912675]
    });

    geocoder.on("result", this.props.setResult);
    geocoder.on("clear", this.props.clearResult);

    map.addControl(geocoder);
  }

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
