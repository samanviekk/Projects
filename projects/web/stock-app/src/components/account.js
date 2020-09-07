import React from "react";

const Account = ({ username, balance }) => {
  return (
    <div>
      <h2>Hello! {username}</h2>
      <h2>Your Balance is ${balance}</h2>
    </div>
  );
};

export default Account;
