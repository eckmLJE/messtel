import { combineReducers } from "redux";

import userReducer from "./userReducer";
import mapReducer from "./mapReducer";
import addressReducer from "./addressReducer";
import commentReducer from "./commentReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  map: mapReducer,
  address: addressReducer,
  comment: commentReducer
});
