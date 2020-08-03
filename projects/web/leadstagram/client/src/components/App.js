import React, { Component } from "react";
import Header from "./shared/Header";
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true}>Leadstagram</Header>
        <p>Welcome to Leadstagram!</p>
      </div>
    );
  }
}

export default App;
