import toDoReducer from "./toDoReducer";
import formReducer from "./formReducer";
import { combineReducers } from "redux";

export default combineReducers({
  toDoList: toDoReducer,
  displayForm: formReducer
});
