import React, { Component } from "react";
import Message from "../components/Message";
import { Link } from "react-router-dom";

class zchoice21121 extends Component {
  render() {
    return (
      <div className='zchoice21121'>
        <Message>
            You chose: Go to a late night party with the bros
            Looks like you made the wrong choice! There was a zombie at the party and you got infected.
            continue to death page
        </Message>
      </div>
    );
  }
}

export default zchoice21121;
