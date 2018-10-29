import React from "react";
import { connect } from "react-redux";
import "./AddressView.css";

const AddressView = props => (
  <div className="address-view">
    {props.result ? (
      <div>
        {props.result.place_name
          .replace("Washington, District of Columbia ", "")
          .replace(", United States", "")}
      </div>
    ) : (
      <div>Search for an Address</div>
    )}
  </div>
);

const mapStateToProps = state => ({
  result: state.map.result
});

export default connect(
  mapStateToProps,
  null
)(AddressView);
