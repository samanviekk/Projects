import React from "react";
import { connect } from "react-redux";
const Account = ({ username, balance }) => {
  return (
    <div>
      <h2>Hello! {username}</h2>
      <h2>Your Balance is ${balance}</h2>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("account", state);
  return {
    username: state.account.name,
    balance: state.account.balance
  };
};
export default connect(mapStateToProps)(Account);
