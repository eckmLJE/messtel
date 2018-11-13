const commentReducer = (
  state = {
    postCommentStatus: ""
  },
  action
) => {
  switch (action.type) {
    case "POST_COMMENT_STARTED":
      return {
        ...state,
        postCommentStatus: "started"
      };
    case "POST_COMMENT_SUCCESS":
      return {
        ...state,
        postCommentStatus: "success"
      };
    case "POST_COMMENT_FAILED":
      return {
        ...state,
        postCommentStatus: "failed"
      };
    default:
      return state;
  }
};

export default commentReducer;
