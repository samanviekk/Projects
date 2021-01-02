import React from "react";
import Account from "./account";
import Stocks from "./stocks";
import Transactions from "./transactions";
//import StockChart from "./stockChart";
import ChartDemo from "./chartDemo";
import "./App.css";
class App extends React.Component {
  onStockBuy = (index, qty) => {};
  onStockSell = (index, qty) => {
    console.log("App", index, qty);
  };

  render() {
    return (
      <div class="container-fluid">
        <div className="app">
          <Account />

          <Stocks />

          <Transactions />
        </div>
      </div>
    );
  }
}

export default App;
