import React from "react";
import "./AddressOVwide.css";

import CommentsList from "../Comments/CommentsList";

const AddressOVwide = props => (
  <div className="address-ov-wide">
    <div className="address-stats">
      <ul>
        <li>Last Updated:</li>
        <li>Notes:</li>
      </ul>
    </div>
    <div className="address-data">
      <ul>
        <li>Loading Dock Req:</li>
        <li>Loading Loc:</li>
        <li>Security Rating:</li>
        <li>Cutoff Time:</li>
      </ul>
    </div>
    <div className="address-comments">
      <CommentsList comments={props.comments} />
    </div>
  </div>
);

export default AddressOVwide;
