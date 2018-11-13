const processAddress = address => ({
  id: address.data.id,
  name: address.data.attributes.name,
  mbid: address.data.attributes.mbid,
  comments: address.data.attributes.comments,
  center: address.data.attributes.center
});

const createDateString = () => {
  let newDate = new Date();
  return newDate.toString();
};

const processComment = comment => ({
  id: comment.data.id,
  user_id: comment.data.attributes["user-id"],
  address_id: comment.data.attributes["address-id"],
  points: comment.data.attributes.points,
  content: comment.data.attributes.content,
  user_name: comment.data.attributes["user-name"],
  created_at: createDateString()
});

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
        currentAddress: processAddress(action.address)
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
    case "ADD_ADDRESS_COMMENT":
      return {
        ...state,
        currentAddress: {
          ...state.currentAddress,
          comments: [
            ...state.currentAddress.comments,
            processComment(action.comment)
          ]
        }
      };
    default:
      return state;
  }
};

export default mapReducer;
