import React, { Component } from "react";
import brain from "./logo1.svg";
import circle from "./circle.png";
import Clock from "react-digital-clock";

import "./component.css";

class Logo extends Component {
  render() {
    return (
      <div className="container">
        <span className="js-nametag" style={{ left: "30%" }}>
          Hey! This is your Virtual Assistant
        </span>
        <span className="js-nametag" style={{ left: "41%" }}>
          I'm listening . . .
        </span>
        <img className="logo1" src={brain} alt="..." />
        <img className="logo2" src={circle} alt="..." />
        <div className="clock">
          <Clock />
        </div>
      </div>
    );
  }
}
export default Logo;
