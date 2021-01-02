import { STOCK_BUY, PRICE_CHANGE } from "../constants";

export const buyStockAction = (symbol, price, qty) => ({
  type: STOCK_BUY,
  symbol: symbol,
  price: price,
  shares: qty
});

export const priceChange = (symbol, price) => ({
  type: PRICE_CHANGE,
  symbol: symbol,
  newPrice: price
});
