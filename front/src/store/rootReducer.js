import {combineReducers} from "redux";
import mailSlice from "./slices/mailSlice";

const rootReducer = combineReducers({
  mails: mailSlice.reducer
});

export default rootReducer;