import React from "react";
import { connect } from "react-redux";

const Transactions = ({ transactions }) => {
  if (transactions.length === 0) return <h2>no tranactions</h2>;
  let tItems = transactions.map((item, index) => (
    <div key={index}>
      {item.symbol}
      {item.price}
      {item.shares}
      {item.profit}
    </div>
  ));
  return <div>{tItems}</div>;
};

const mapStateToProps = state => {
  return {
    transactions: state.transactions
  };
};

export default connect(mapStateToProps)(Transactions);
