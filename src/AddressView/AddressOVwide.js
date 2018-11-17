import React from "react";
import "./AddressOVwide.css";

import CommentsList from "../Comments/CommentsList";

const AddressOVwide = props => (
  <div className="address-ov-wide">
    <div className="address-info">
      <div className="address-stats">
        <ul>
          <li>
            <span>Last Updated:</span>
            <span>{props.lastUpdated}</span>
          </li>
          <li>
            <span>Notes:</span>
            <span>{props.comments.length}</span>
          </li>
        </ul>
      </div>
      <div className="address-data">
        <ul>
          <li>
            <span>Loading Dock Req:</span>
            <span>Yes</span>
            <span>95%</span>
          </li>
          <li>
            <span>Loading Loc:</span>
            <span>Rear Alley</span>
            <span>75%</span>
          </li>
          <li>
            <span>Security Rating:</span>
            <span>3/5</span>
            <span>51%</span>
          </li>
          <li>
            <span>Cutoff Time:</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="address-comments">
      <CommentsList comments={props.comments} />
    </div>
  </div>
);

export default AddressOVwide;
