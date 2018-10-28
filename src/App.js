import React, { Component } from "react";
import "./App.css";

import Header from "./Header/Header";
import MapView from "./MapView/MapView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div
          style={{
            position: "relative",
            display: "block",
            width: "100%",
            height: "75px"
          }}
        />
        <MapView />
      </div>
    );
  }
}

export default App;
