import { STOCK_BUY, PRICE_CHANGE } from "../constants";

export const transactions = (state = [], action) => {
  switch (action.type) {
    case STOCK_BUY:
      return [
        ...state,
        {
          symbol: action.symbol,
          shares: action.shares,
          price: action.price,
          profit: 0
        }
      ];
    case PRICE_CHANGE:
      return state.map(s =>
        s.symbol === action.symbol
          ? { ...s, profit: (action.newPrice - s.price) * s.shares + s.profit }
          : s
      );
    default:
      return state;
  }
};
