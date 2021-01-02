import { PRICE_CHANGE } from "../constants";

const initialState = [
  {
    symbol: "GOOG",
    price: 200
  },
  {
    symbol: "FB",
    price: 50
  },
  {
    symbol: "AAPL",
    price: 10
  }
];

export const stocks = (state = initialState, action) => {
  if (action.type === PRICE_CHANGE) {
    return state.map(s =>
      action.symbol === s.symbol
        ? { symbol: s.symbol, price: action.newPrice }
        : s
    );
  }
  return state;
};
