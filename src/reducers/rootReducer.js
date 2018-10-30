import { combineReducers } from "redux";

import userReducer from "./userReducer";
import mapReducer from "./mapReducer";
import addressReducer from "./addressReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  map: mapReducer,
  address: addressReducer
});
