import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";

import Header from "./Header/Header";
import MapView from "./MapView/MapView";
import AddressView from "./AddressView/AddressView";
import User from "./User/User";

import { loadUser } from "./actions/user";

class App extends Component {
  state = { result: null };

  componentDidMount = () => {
    this.props.loadUser();
  };

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
        <AddressView />
        <User />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
