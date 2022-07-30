import { combineReducers } from "redux";
import globalReducer from "./global/reducer";
import memberReducer from "./members/reducer";
import taskReducer from "./tasks/reducer";
const rootReducer = combineReducers({
  global: globalReducer,
  tasks: taskReducer,
  members: memberReducer
});

export default rootReducer;
