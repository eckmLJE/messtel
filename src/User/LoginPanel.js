import React, { Component } from "react";
import { connect } from "react-redux";

import { authenticateUser } from "../actions/user";

class LoginPanel extends Component {
  state = { email: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    const userData = this.state;
    this.props.authenticateUser(userData);
  };

  render() {
    return (
      <div className="login-panel">
        <form>
          <input
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={e =>
              this.setState({ email: e.target.value.toLowerCase() })
            }
          />
          <input
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={e =>
              this.setState({ password: e.target.value.toLowerCase() })
            }
          />
          <button onClick={this.handleLogin}>Log In</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  logInFailed: state.user.logInFailed
});

const mapDispatchToProps = dispatch => ({
  authenticateUser: userData => dispatch(authenticateUser(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPanel);
