import React, { useRef } from "react";
import styled from "styled-components";

const Stock = props => {
  const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

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
      <Button>
        <button onClick={() => handleBuyButtonClick(index)}> buy </button>
      </Button>
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
