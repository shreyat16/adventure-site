import React, { Component } from "react";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import "./MurderMystery.css";

class MurderMystery extends Component {
  render() {
    return (
      <div className='MurderMystery'>
        <Message>
          <h1>welcome to Murder Mystery</h1>
        </Message>
      </div>
    );
  }
}

export default MurderMystery;
