import React, { Component } from "react";
import App from "./App";

export default class Card extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-header">Natthakan Jamratphum </div> <br />
          <div className="card-body">
            <img className="round" src={this.props.profile} alt="user" />
            <h3>{this.props.name}</h3>
            <p>Section: 66/53 </p>
            <p>Major: Software Engineering</p>
            <p>Farolty: SCI</p>
            <p>University: Nakhon Pathom Rajabhat University</p>
            <p>tel: 0821505710</p>
          </div>
        </div>
      </>
    );
  }
}


