import React, { Component } from "react";
import brain from "./logo1.svg";
import circle from "./circle.png";
import background from "./background.jpg";

import "./component.css";

class Logo extends Component {
  render() {
    return (
      <div className="container">
        <img className="logo1" src={brain} alt="..." />
        <img className="logo2" src={circle} alt="..." />
      </div>
    );
  }
}
export default Logo;
