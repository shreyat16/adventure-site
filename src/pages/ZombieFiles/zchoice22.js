import React, { Component } from "react";
import Message from "../components/Message";
import { Link } from "react-router-dom";

class zchoice22 extends Component {
  render() {
    return (
      <div className='zchoice22'>
        <Message>
            You chose: Ignore and move on
            You grab a couple of items and put them in your cart. What items do you want to take?
            Canned beans, cauliflower from the vegetable aisle, croissants from the bakery, and lunch meat from the deli
            Fresh oranges, some spinach from the vegetable aisle, donuts from the bakery, and frozen bacon from the deli

        </Message>
      </div>
    );
  }
}

export default zchoice22;
