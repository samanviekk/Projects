import React from "react";
import "./newContact.css";

const Banner = ({ show, status, reason }) => {
  if (!show) {
    return null;
  }
  return (
    <div>
      <h2>{status}</h2>
      <h3>{reason}</h3>
    </div>
  );
};
export default class NewContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      submit: false,
      status: "",
      reason: ""
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

  async handleSubmit(event) {
    event.preventDefault();
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
      let result = await resp.json();

      this.setState({
        submit: true,
        status: result.status,
        reason: result.reason
      });
    } catch (err) {
      this.setState({
        status: err.status,
        reason: err.reason
      });
    }
  }
  render() {
    return (
      <div className="contacts">
        <Banner
          show={this.state.submit}
          status={this.state.status}
          reason={this.state.reason}
        />
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>
                Name:
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </label>
            </li>
            <li>
              <label>
                Phone:
                <input
                  type="text"
                  value={this.state.phone}
                  onChange={this.handlePhoneChange}
                />
              </label>
            </li>
            <li>
              <label>
                Email:
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                />
              </label>
            </li>
          </ul>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
