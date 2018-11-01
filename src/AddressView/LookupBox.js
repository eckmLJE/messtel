import React, { Component } from "react";
import { connect } from "react-redux";
import "./LookupBox.css";

import { lookUpAddress } from "../actions/address";

import NewAddress from "./NewAddress";
import AddressOverview from "./AddressOverview";

class LookupBox extends Component {
  componentDidMount = () => {
    this.props.lookUpAddress(this.props.mbid);
  };

  render() {
    return (
      <div>
        {!!this.props.currentAddress ? <AddressOverview /> : null}
        {this.props.lookUpStatus === "notFound" ? (
          <NewAddress
            placeName={this.props.placeName}
            mbid={this.props.mbid}
            center={this.props.center}
          />
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
