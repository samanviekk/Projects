import React from "react";
import styled from "styled-components";

const Transactions = ({ transactions }) => {
  const List = styled.div`
    background: ${props => (props.primary ? "palevioletred" : "white")};
    color: ${props => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  if (transactions.length === 0) return <h2>no tranactions</h2>;
  let tItems = transactions.map((item, index) => (
    <div key={index}>
      <ul>
        <li>
          {item.symbol} - price: {item.price}, Number Of Shares bought:
          {item.shares}, profit: {item.profit}.
        </li>
      </ul>
    </div>
  ));
  return (
    <List>
      <div>{tItems}</div>
    </List>
  );
};

export default Transactions;
