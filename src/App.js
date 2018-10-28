import React, { Component } from "react";
import "./App.css";

import Header from "./Header/Header";
import MapView from "./MapView/MapView";

class App extends Component {
  state = { result: null };

  setResult = result => {
    console.log(result);
    this.setState({ result: result });
  };

  clearResult = () => {
    this.setState({ result: null });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div
          style={{
            position: "relative",
            display: "block",
            width: "100%",
            height: "65px"
          }}
        />
        <MapView setResult={this.setResult} clearResult={this.clearResult} />
        <h1>
          {this.state.result
            ? this.state.result.result.place_name
            : "Enter an Address"}
        </h1>
      </div>
    );
  }
}

export default App;
