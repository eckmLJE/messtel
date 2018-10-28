import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibHVjYXNlY2ttYW4iLCJhIjoiY2lpYXM0N3E2MDBlYW1vbHp4djNwODN4MyJ9.zJPYOvKeY67m9ab8V5WhwA";

export default class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/lucaseckman/cjnnjqyhn0ed12sp1u4am4ewd"
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "100%"
    };

    return <div style={style} ref={el => (this.mapContainer = el)} />;
  }
}
