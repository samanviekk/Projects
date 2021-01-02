import React from "react";
import Account from "./account";
import Stocks from "./stocks";
import Transactions from "./transactions";
import styled from "styled-components";

const appState = {
  username: "kalyani",
  balance: 100000,
  transactionList: [],
  stockList: [
    {
      symbol: "GOOG",
      price: 600
    },
    {
      symbol: "FB",
      price: 134
    }
  ]
};

class App extends React.Component {
  constructor() {
    super();
    this.state = appState;
  }
  onStockBuy = (index, qty) => {
    let stockItem = appState.stockList[index];
    let cost = stockItem.price * qty;

    appState.balance = appState.balance - cost;

    appState.transactionList.push({
      symbol: stockItem.symbol,
      price: stockItem.price,
      shares: qty,
      profit: 0
    });

    this.setState({
      balance: appState.balance,
      transactionList: appState.transactionList
    });
  };
  onStockSell = (index, qty) => {
    console.log("App", index, qty);
  };

  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
      background-color: lightblue;
    `;

    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
    `;

    const { username, balance, stockList, transactionList } = this.state;
    return (
      <Wrapper>
        <div className="app">
          <Title> Stock Application</Title>
          <Account username={username} balance={balance} />

          <Stocks stocks={stockList} onStockBuy={this.onStockBuy} />

          <Transactions transactions={transactionList} />
        </div>
      </Wrapper>
    );
  }
}

export default App;
