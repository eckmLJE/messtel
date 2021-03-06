import { token, url } from "./index";

export const addNewComment = comment => ({
  type: "ADD_ADDRESS_COMMENT",
  comment
});

const postComment = comment => {
  return fetch(url + "/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token()}`
    }
  });
};

export const postNewComment = comment => dispatch => {
  dispatch({ type: "POST_COMMENT_STARTED" });
  postComment(comment).then(res => {
    res.status === 200
      ? res.json().then(respComment => {
          dispatch(addNewComment(respComment));
          dispatch({ type: "POST_COMMENT_SUCCESS" });
        })
      : dispatch({ type: "POST_COMMENT_FAILED" });
  });
};
