import React, { useState, useEffect } from "react";
import "../styles.css";

class Greeting4 extends React.Component() {
  constructor(props) {
    super(props);
    this.state = { person: "..." };
  }

  componentDidMount() {
    console.log("Componente montado!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componente actualizado!");
  }

  onChangeHandler = (event) => {
    const name = event.target.value;
    this.setState({ person: name });
  };

  componentWillUnmount() {
    console.log("componente destruido! Se desmontó del DOM");
  }

  render() {
    return (
      <div className="greeting__container">
        <div className="flex-container">
          <p className="greeting">
            Hi! 👋🏼 How are you <b>{this.state.person}</b>?
          </p>
        </div>
        <input
          className="person-input"
          type="text"
          onChange={this.onChangeHandler}
          // onChange={(event) => setPerson(event.target.value)}
          placeholder="Enter the person name who wants to greet"
        />
      </div>
    );
  }
}
