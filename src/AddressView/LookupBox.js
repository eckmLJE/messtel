import React, { Component } from "react";
import { connect } from "react-redux";
import "./LookupBox.css";

import { lookUpAddress } from "../actions/address";

import NewAddress from "./NewAddress";

class LookupBox extends Component {
  componentDidMount = () => {
    const id = this.props.mbid;
    // .replace(/,/g, "")
    // .replace(" ", "")
    // .replace("-", "");
    console.log(id);
    this.props.lookUpAddress(id);
  };

  render() {
    return (
      <div>
        {!!this.props.currentAddress ? (
          <div>{this.props.currentAddress.data.attributes.name}</div>
        ) : null}
        {this.props.lookUpStatus === "notFound" ? (
          <NewAddress placeName={this.props.placeName} mbid={this.props.mbid} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentAddress: state.address.currentAddress,
  lookUpStatus: state.address.lookUpStatus
});

const mapDispatchToProps = dispatch => ({
  lookUpAddress: mbid => dispatch(lookUpAddress(mbid))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LookupBox);
