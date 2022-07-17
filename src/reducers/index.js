import display from "./calculatorReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  display
});
export default allReducers;