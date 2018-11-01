import React, { Component } from "react";
import { connect } from "react-redux";
import "./CommentsView.css";

import { postNewComment } from "../actions/comment";

import CommentsList from "./CommentsList";

class CommentsView extends Component {
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
      <div className="comments-view">
        <div className="comments-view-button">
          <button onClick={this.props.hideComments}>Hide Comments</button>
        </div>
        <CommentsList comments={this.props.currentAddress.comments} />
        <form>
          <textarea
            onChange={e => this.setState({ content: e.target.value })}
            value={this.state.content}
          />
          <div className="submit-comment-button">
            <button onClick={this.handleCommentSubmit}>Submit Comment</button>
          </div>
        </form>
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
)(CommentsView);
