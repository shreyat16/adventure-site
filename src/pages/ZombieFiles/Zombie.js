import React, { Component } from "react";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import "./Zombie.css";

import zstory1 from "./zstory1"

class Zombie extends Component {
  render() {
    return (
      <div className='Zombie'>
          <h1>Welcome to Zombie Adventure</h1>
          <zstory1/>
      </div>
    );
  }
}

export default Zombie;
