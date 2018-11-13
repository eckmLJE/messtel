import React from "react";
import "./UserPanel.css";

import { connect } from "react-redux";

const UserPanel = props => (
  <div className="user-panel">
    {!!props.currentUser ? (
      <div>
        Logged In as <span>{props.currentUser.name}</span>
      </div>
    ) : null}
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(
  mapStateToProps,
  null
)(UserPanel);
