import React, { Component } from "react";
import Header from "./shared/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header dark={true}>Leadstagram</Header>
        <h1>Hello Cutie Abhav!</h1>
      </div>
    );
  }
}

export default App;
