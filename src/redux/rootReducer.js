import { combineReducers } from "redux";
import globalReducer from "./global/reducer";

const rootReducer = combineReducers({
  app: globalReducer,
});

export default rootReducer;
