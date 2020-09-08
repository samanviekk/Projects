import React, { useRef } from "react";
import { connect } from "react-redux";
import { buyStockAction } from "../actions";
import store from "../store";

const Stock = ({ index, symbol, price, dispatch }) => {
  const qtyInput = useRef(null);

  const handleBuyButtonClick = (symbol, price) => {
    let number_of_shares = qtyInput.current.value;
    store.dispatch(buyStockAction(symbol, price, number_of_shares));
    qtyInput.current.value = "";
  };

  return (
    <div key={index}>
      <b>{symbol}</b> | <b>{price}</b>
      <label htmlFor="qty">quantity</label>
      <input type="number" id="qty" ref={qtyInput} />
      <button onClick={() => handleBuyButtonClick(symbol, price)}> buy </button>
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

const mapStateToProps = state => ({
  stocks: state.stocks
});

export default connect(mapStateToProps)(Stocks);
