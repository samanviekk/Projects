import { STOCK_BUY } from "../constants";

export const transactions = (state = [], action) => {
  if (action.type === STOCK_BUY) {
    return [
      ...state,
      {
        symbol: action.symbol,
        shares: action.shares,
        price: action.price,
        profit: 0
      }
    ];
  }
  return state;
};
