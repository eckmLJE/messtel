const url = "http://localhost:3000/api/v1";

const token = () => {
  return localStorage.getItem("token");
};

const postUserAuthentication = userData => {
  return fetch(`${url}/user_token`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      auth: userData
    })
  });
};

const getUser = () => {
  return fetch(`${url}/user`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token()}`
    }
  });
};

export const logOutUser = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT_USER" });
};

export const authenticateUser = userData => dispatch => {
  dispatch({ type: "AUTHENTICATING_USER" });
  postUserAuthentication(userData).then(res => {
    if (res.status === 201) {
      res.json().then(token => {
        localStorage.setItem("token", token.jwt);
        dispatch({ type: "USER_AUTHENTICATED" });
        dispatch(loadUser());
      });
    } else if (res.status === 404) {
      dispatch({ type: "USER_AUTHENTICATION_FAILED" });
    }
  });
};

export const loadUser = () => dispatch => {
  if (token()) {
    dispatch({ type: "FETCHING_USER" });
    getUser().then(resp => {
      if (resp.status === 200) {
        resp.json().then(user => {
          dispatch({ type: "FETCHED_USER", user });
        });
      } else {
        dispatch({ type: "USER_LOGIN_FAILED" });
      }
    });
  } else {
    dispatch({ type: "LOAD_USER_FAILED" });
  }
};
