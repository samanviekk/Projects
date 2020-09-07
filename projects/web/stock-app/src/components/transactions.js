import React from "react";

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

export default Transactions;
