import React from "react";
import "./CommentsList.css";

import CommentItem from "./CommentItem";

const CommentsList = props => (
  <div className="comments-list">
    {props.comments.map(comment => (
      <CommentItem key={comment.id} comment={comment} />
    ))}
  </div>
);

export default CommentsList;
