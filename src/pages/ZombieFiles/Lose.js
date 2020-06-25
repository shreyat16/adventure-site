import React, { Component } from "react";
import Message from "../components/Message";
import { Link } from "react-router-dom";

class Lose extends Component {
  render() {
    return (
      <div className='Lose'>
        <Message>
            You lose
        </Message>
      </div>
    );
  }
}

export default Lose;
