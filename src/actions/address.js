import { token } from "./index";

const url = "http://localhost:3000/api/v1";

export const setCurrentAddress = address => ({
  type: "SET_CURRENT_ADDRESS",
  address
});

export const clearCurrentAddress = () => ({
  type: "CLEAR_CURRENT_ADDRESS"
});

const mbidLookupFetch = mbid => {
  return fetch(url + `/mbidlookup/${mbid}`);
};

const postAddress = address => {
  return fetch(url + "/addresses", {
    method: "POST",
    body: JSON.stringify(address),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token()}`
    }
  });
};

export const lookUpAddress = mbid => dispatch => {
  dispatch({ type: "MBID_LOOKUP_STARTED" });
  mbidLookupFetch(mbid).then(res => {
    res.status === 200
      ? res.json().then(address => {
          console.log(address);
          if (address) {
            dispatch(setCurrentAddress(address));
          } else {
            dispatch({ type: "MBID_NOT_FOUND" });
          }
        })
      : dispatch({ type: "MBID_NOT_FOUND" });
  });
};

export const postNewAddress = address => dispatch => {
  dispatch({ type: "POST_ADDRESS_STARTED" });
  postAddress(address).then(res => {
    res.status === 200
      ? res.json().then(respAddress => {
          console.log(respAddress);
          dispatch({ type: "POST_ADDRESS_SUCCESS" });
          dispatch(setCurrentAddress(respAddress));
        })
      : dispatch({ type: "POST_ADDRESS_FAILED" });
  });
};
