import { STOCK_BUY } from "../constants";

export const buyStockAction = (symbol, price, qty) => ({
  type: STOCK_BUY,
  symbol: symbol,
  price: price,
  shares: qty
});
