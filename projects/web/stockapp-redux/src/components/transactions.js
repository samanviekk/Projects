import React from "react";
import { connect } from "react-redux";

const Transactions = ({ transactions }) => {
  if (transactions.length === 0) return <h4>No tranactions!</h4>;
  let tItems = transactions.map((item, index) => (
    <div class="row" key={index}>
      <div class="col">
        <b>
          {item.symbol} | ${item.price}
        </b>
      </div>
      <div class="col">NumberOfShares: {item.shares}</div>
      <div class="col">Your Profit: ${item.profit}</div>
    </div>
  ));
  return (
    <div class="card" margin="20px">
      <h4>Your Transactions!</h4>
      {tItems}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    transactions: state.transactions
  };
};

export default connect(mapStateToProps)(Transactions);
