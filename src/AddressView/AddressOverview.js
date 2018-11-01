import React, { Component } from "react";
import { connect } from "react-redux";

import { postNewComment } from "../actions/comment";

class AddressOverview extends Component {
  state = { content: "" };

  handleCommentSubmit = e => {
    e.preventDefault();
    const comment = {
      address_id: this.props.currentAddress.id,
      user_id: this.props.currentUser.id,
      content: this.state.content,
      user_name: this.props.currentUser.name
    };
    this.props.postNewComment(comment);
    this.setState({ content: "" });
  };

  render() {
    return (
      <div>
        {this.props.currentAddress.comments.map(comment => (
          <div key={comment.id}>{comment.content}</div>
        ))}
        <textarea
          onChange={e => this.setState({ content: e.target.value })}
          value={this.state.content}
        />
        <button onClick={this.handleCommentSubmit}>Submit Comment</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentAddress: state.address.currentAddress,
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  postNewComment: comment => dispatch(postNewComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressOverview);
