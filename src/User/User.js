import React from "react";
import "./User.css";
import { connect } from "react-redux";

import UserPanel from "./UserPanel";
import LoginPanel from "./LoginPanel";

const User = props => (
  <div className="user">{props.loggedIn ? <UserPanel /> : <LoginPanel />}</div>
);

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn
});

export default connect(
  mapStateToProps,
  null
)(User);
