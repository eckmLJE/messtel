import React from "react";
import "./CommentItem.css";

const CommentItem = props => (
  <div className="comment-item">{props.comment.content}</div>
);

export default CommentItem;
