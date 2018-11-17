import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./AddressView.css";
import LookupBox from "./LookupBox";

const processPlaceName = result => {
  if (result) {
    return result.place_name
      .replace("Washington, District of Columbia ", "")
      .replace(", United States", "");
  }
};

const processMbid = result => {
  if (result) {
    let name = result.address + result.id;
    return name.replace(/\./g, "");
  }
};

const AddressView = props => {
  const placeName = processPlaceName(props.result);
  const mbid = processMbid(props.result);
  return (
    <div className="address-view">
      {props.result ? (
        <Fragment>
          <h4>{placeName}</h4>
          <LookupBox
            mbid={mbid}
            placeName={placeName}
            center={props.result.center}
          />
        </Fragment>
      ) : (
        <p>Use the Search Box to Look Up an Address</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  result: state.map.result
});

export default connect(
  mapStateToProps,
  null
)(AddressView);
