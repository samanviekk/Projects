import React from "react";
import Account from "./account";
import Stocks from "./stocks";
import Transactions from "./transactions";

class App extends React.Component {
  constructor() {
    super();
  }
  onStockBuy = (index, qty) => {};
  onStockSell = (index, qty) => {
    console.log("App", index, qty);
  };

  render() {
    return (
      <div className="app">
        <Account />

        <Stocks />

        <Transactions />
      </div>
    );
  }
}

export default App;
