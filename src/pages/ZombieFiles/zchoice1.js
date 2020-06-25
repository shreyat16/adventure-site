import React, { Component } from "react";
import Message from "../components/Message";
import { Link } from "react-router-dom";

class zchoice1 extends Component {
  render() {
    return (
      <div className='zchoice1'>
        <Message>
        You chose: Meet up with your girlfriend

        You call her and tell her to meet you at the park. 
        You see her and hug her. 
        She tells you that she’s scared about the lying people around town. 
        You tell her it’s probably a thing that the adults are doing to be like the young cool kids.
        "Want to get some food?" you ask.
        She says yeah. You go to the restaurant. She orders a burger with a veggie patty because she’s trying a new diet. 
        You choose:
        </Message>
      </div>
    );
  }
}

export default zchoice1;
