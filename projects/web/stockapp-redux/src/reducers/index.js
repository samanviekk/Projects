import { combineReducers } from "redux";
import { account } from "./account";
import { transactions } from "./transactions";
import { stocks } from "./stocks";

export default combineReducers({
  account,
  stocks,
  transactions
});
