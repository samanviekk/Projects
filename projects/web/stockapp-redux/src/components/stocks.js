import React, { useRef } from "react";
import { connect } from "react-redux";
import { buyStockAction, priceChange } from "../actions";
import store from "../store";

const StockItem = ({ index, symbol, price, dispatch }) => {
  const qtyInput = useRef(null);

  const handleBuyButtonClick = (symbol, price) => {
    let number_of_shares = qtyInput.current.value;
    store.dispatch(buyStockAction(symbol, price, number_of_shares));
    qtyInput.current.value = "";
  };

  return (
    <div className="row" key={index}>
      <div className="col">
        <b>{symbol}</b> | price: <b>${price}</b>
      </div>
      <div className="col">
        <label htmlFor="qty">quantity:</label>
        <input type="number" id="qty" ref={qtyInput} required />
      </div>
      <div className="col">
        <button
          className="btn btn-outline-dark btn-block"
          onClick={() => handleBuyButtonClick(symbol, price)}
        >
          buy
        </button>
      </div>
    </div>
  );
};

class Stocks extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      let stocks = this.props.stocks;
      if (stocks.length === 0) return;
      let number = Math.floor(Math.random() * 10);
      let index = number % stocks.length;
      let symbol = stocks[index].symbol;
      let price = stocks[index].price;
      if (number % 2 === 0) {
        price = price + number;
      } else {
        price = price - number > 0 ? price - number : price;
      }
      store.dispatch(priceChange(symbol, price));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { stocks } = this.props;
    let stockItems = stocks.map((stock, index) => (
      <StockItem
        key={index}
        index={index}
        symbol={stock.symbol}
        price={stock.price}
        onStockBuy={this.props.onStockBuy}
      />
    ));
    return (
      <div>
        <h3>TRADING</h3>
        <div class="card">{stockItems}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stocks: state.stocks
});

export default connect(mapStateToProps)(Stocks);
