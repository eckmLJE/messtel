import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";

import Header from "./Header/Header";
import MapView from "./MapView/MapView";
import AddressView from "./AddressView/AddressView";
import User from "./User/User";

import { loadUser } from "./actions/user";

class App extends Component {
  componentDidMount = () => {
    this.props.loadUser();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="responsive-container">
          <MapView />
          <AddressView />
        </div>
        <User />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    result: state.map.result
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
