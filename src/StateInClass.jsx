import React, { Component } from "react";

export default class StateInClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "1",
      name: props.name,
      Counter: 0
    }
  }
  render() {
    return (
    <div>
        {this.state.name}
    </div>)
  }
}
