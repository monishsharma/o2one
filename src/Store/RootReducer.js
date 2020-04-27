import ReducerState from "./ReduxState/Reducer/Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: ReducerState,
});

export default rootReducer;
