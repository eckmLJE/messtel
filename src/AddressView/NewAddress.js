import React, { Component } from "react";
import { connect } from "react-redux";
import "./NewAddress.css";

import { postNewAddress } from "../actions/address";

class NewAddress extends Component {
  handleCreateAddress = e => {
    e.preventDefault();
    const address = {
      name: this.props.placeName,
      mbid: this.props.mbid,
      center: this.props.center.toString()
    };
    console.log(address);
    this.props.postNewAddress(address);
  };

  render() {
    return (
      <div className="new-address">
        <p>THIS ADDRESS DOES NOT HAVE AN ENTRY YET.</p>
        <div className="new-address-button">
          <button onClick={this.handleCreateAddress}>
            CREATE ADDRESS ENTRY
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postNewAddress: address => dispatch(postNewAddress(address))
});

export default connect(
  null,
  mapDispatchToProps
)(NewAddress);
