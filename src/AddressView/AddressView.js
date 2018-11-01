import React from "react";
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
  console.log(props.result);
  return (
    <div className="address-view">
      {props.result ? (
        <div>
          <h3>{placeName}</h3>
          <LookupBox
            mbid={mbid}
            placeName={placeName}
            center={props.result.center}
          />
        </div>
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
