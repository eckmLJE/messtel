import React from "react";
import "./CommentItem.css";

import moment from "moment";

const CommentItem = props => (
  <div className="comment-item">
    <div className="comment-item-header">
      <div className="user-container">
        <h4>
          <span>{props.comment.user_name}</span> posted on{" "}
          <span>{moment(new Date(props.comment.created_at)).format("L")}</span>
        </h4>
      </div>
      <div className="points-container">
        <div className="point-button-container">
          <div className="point-button">
            <button>-</button>
          </div>
          <div className="point-button">
            <button>+</button>
          </div>
        </div>
        <h4>
          <span>{props.comment.points}</span> points
        </h4>
      </div>
    </div>
    <p>{props.comment.content}</p>
  </div>
);

export default CommentItem;
