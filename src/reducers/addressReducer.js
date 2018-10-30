const mapReducer = (
  state = {
    currentAddress: null,
    lookUpStatus: ""
  },
  action
) => {
  switch (action.type) {
    case "SET_CURRENT_ADDRESS":
      return {
        ...state,
        currentAddress: action.address
      };
    case "MBID_LOOKUP_STARTED":
      return {
        ...state,
        lookUpStatus: "started",
        currentAddress: null
      };
    case "MBID_NOT_FOUND":
      return {
        ...state,
        lookUpStatus: "notFound"
      };
    case "CLEAR_CURRENT_ADDRESS":
      return {
        ...state,
        currentAddress: null
      };
    case "POST_ADDRESS_SUCCESS":
      return {
        ...state,
        lookUpStatus: "success"
      };
    default:
      return state;
  }
};

export default mapReducer;
