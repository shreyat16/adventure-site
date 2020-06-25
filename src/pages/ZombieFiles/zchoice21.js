import React, { Component } from "react";
import Message from "../components/Message";
import { Link } from "react-router-dom";

class zchoice21 extends Component {
  render() {
    return (
      <div className='zchoice21'>
        <Message>
            You chose: Talk to him
            Hey dude! What are you doing with all that spinach? 
            “Umm… hi?” the strange man responds with an oddly high pitched voice. I’m just trying out this new homemade recipe to sell at my store, and boy oh boy does it require oodles and oodles of spinach!
            “Interesting! What’s the recipe?” you ask. “Well, I’ve been trying to make alternative versions of fast food. To reduce heartburn. I’m a scientist.”
            “Cool! What’s your name?” you ask. 
            “I’m Dr. Fred. Nice to meet you!” 
            “Nice to meet you too. It was nice talking to you sir, but I have to get going. I’m going to meet up with my girlfriend later.”
            “Okay, kid! You have fun!” Dr. Fred says as he walks away. 

            You have 2 options now. Should you:
            Grab a ton of spinach because you want to be healthy too
            Grab a loaf of bread and head out because spinach is gross
        </Message>
      </div>
    );
  }
}

export default zchoice21;
