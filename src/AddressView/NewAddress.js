import React, { Component } from "react";
import { connect } from "react-redux";

import { postNewAddress } from "../actions/address";

class NewAddress extends Component {
  handleCreateAddress = e => {
    e.preventDefault();
    const address = {
      name: this.props.placeName,
      mbid: this.props.mbid
    };
    this.props.postNewAddress(address);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleCreateAddress}>Create Address Entry</button>
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
