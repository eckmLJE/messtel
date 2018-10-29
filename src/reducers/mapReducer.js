const mapReducer = (
  state = {
    result: null
  },
  action
) => {
  switch (action.type) {
    case "SET_CURRENT_RESULT":
      return {
        ...state,
        result: action.result.result
      };
    case "CLEAR_CURRENT_RESULT":
      return {
        ...state,
        result: null
      };
    default:
      return state;
  }
};

export default mapReducer;
