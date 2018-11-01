import React, { Component } from "react";
import "./AddressOverview.css";

import moment from "moment";

import CommentsView from "../Comments/CommentsView";

class AddressOverview extends Component {
  state = { showComments: false };

  handleShowComments = () =>
    this.setState({ showComments: !this.state.showComments });

  getLatestUpdate = comments => {
    let sortingComments = comments.map(comment => ({
      id: comment.id,
      updated: new Date(comment.created_at)
    }));
    sortingComments.sort((a, b) => b.updated - a.updated);
    console.log(sortingComments[0].updated);
  };

  render() {
    const comments = this.props.currentAddress.comments;
    return (
      <div className="address-overview">
        {!!comments.length ? (
          <div>
            <p>THIS ENTRY HAS {comments.length} COMMENTS.</p>
            <p>
              LAST UPDATED {moment(this.getLatestUpdate(comments)).format("L")}
            </p>
          </div>
        ) : (
          <p>No comments yet. Be the first!</p>
        )}

        <p />
        <div className="show-comments-button">
          <button onClick={this.handleShowComments}>Show Comments</button>
        </div>

        {this.state.showComments ? (
          <CommentsView hideComments={this.handleShowComments} />
        ) : null}
      </div>
    );
  }
}

export default AddressOverview;
