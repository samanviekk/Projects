import React, { Component } from "react";

export default class NewContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  handleEmailChange(event) {
    console.log(event.target);
    this.setState({ email: event.target.value });
  }

  /*   handleSubmit(event) {
    let data = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email
    };

    let url = "http://localhost:3001/phonebook";
    fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(data)
    })
      .then(function (data) {
        console.log("Request succeeded with JSON response", data);
      })
      .catch(function (error) {
        console.log("Request failed", error);
      });

    event.preventDefault();
  } */

  async handleSubmit(event) {
    let data = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email
    };

    let url = "http://localhost:3001/phonebook";
    try {
      let resp = await fetch(url, {
        method: "post",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
      });
      let result = resp;
      console.log(result);
    } catch (err) {
      console.log(err);
    }

    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
