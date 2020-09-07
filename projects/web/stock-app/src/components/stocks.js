import React, { useRef } from "react";

const Stock = props => {
  const { index, price, symbol } = props;
  const qtyInput = useRef(null);
  const handleBuyButtonClick = index => {
    let number_of_shares = qtyInput.current.value;
    props.onStockBuy(index, number_of_shares);
    qtyInput.current.value = "";
  };

  return (
    <div key={index}>
      <b>{symbol}</b> | <b>{price}</b>
      <label htmlFor="qty">quantity</label>
      <input type="number" id="qty" ref={qtyInput} />
      <button onClick={() => handleBuyButtonClick(index)}> buy </button>
    </div>
  );
};

const Stocks = props => {
  const { stocks } = props;
  let stockItems = stocks.map((stock, index) => (
    <Stock
      key={index}
      index={index}
      symbol={stock.symbol}
      price={stock.price}
      onStockBuy={props.onStockBuy}
    />
  ));
  return <div>{stockItems}</div>;
};

export default Stocks;
