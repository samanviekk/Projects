import { STOCK_BUY } from "../constants";

const initialState = {
  name: "kalyani",
  balance: 100000
};

export const account = (state = initialState, action) => {
  if (action.type === STOCK_BUY) {
    let cost = action.price * action.shares;
    return Object.assign(state, { balance: state.balance - cost });
  }
  return state;
};
