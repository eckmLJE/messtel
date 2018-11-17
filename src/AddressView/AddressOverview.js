import React, { Component } from "react";
import "./AddressOverview.css";

import moment from "moment";
import MediaQuery from "react-responsive";

import AddressOV768 from "./AddressOV768";
import AddressOV575 from "./AddressOV575";
import AddressOVwide from "./AddressOVwide";
// import CommentsView from "../Comments/CommentsView";

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
  };

  render() {
    const comments = this.props.currentAddress.comments;
    const lastUpdated = moment(this.getLatestUpdate(comments)).format("L");
    return (
      <div className="address-overview">
        <MediaQuery query="(min-device-width: 769px)">
          <AddressOVwide lastUpdated={lastUpdated} comments={comments} />
        </MediaQuery>
        <MediaQuery query="(min-device-width: 576px) and (max-device-width: 768px)">
          <AddressOV768 lastUpdated={lastUpdated} comments={comments} />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 575px)">
          <AddressOV575 lastUpdated={lastUpdated} comments={comments} />
          {/* {!!comments.length ? (
            <div>
              <p>THIS ENTRY HAS {comments.length} COMMENTS.</p>
              <p>LAST UPDATED </p>
            </div>
          ) : (
            <p>No comments yet. Be the first!</p>
          )}
          <div className="show-comments-button">
            <button onClick={this.handleShowComments}>Show Comments</button>
          </div>
          {this.state.showComments ? (
            <CommentsView hideComments={this.handleShowComments} />
          ) : null} */}
        </MediaQuery>
      </div>
    );
  }
}

export default AddressOverview;
