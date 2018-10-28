import React from "react";
import "./MapView.css";
import Map from "../Map/Map";

const MapView = props => (
  <div className="map-view">
    <Map setResult={props.setResult} clearResult={props.clearResult} />
  </div>
);

export default MapView;
