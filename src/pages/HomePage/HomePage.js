import React, {Component} from 'react';
import './HomePage.css';
import {Link} from "react-router-dom";
import Message from "../components/Message"
import bgImg from "./bgimg.png";
 
class HomePage extends Component{
  render(){
    return (
      <div className="VendingMachine" style={{ backgroundImage: `url(${bgImg})` }}>
        <Message>
          <h1>Hello, welcome to choose you own adventure. </h1>
          <h1 className="subtitle">bored?.</h1>
          <h2 className="subsubtitle">Prepare to embark on the most dangerous adventures</h2>
          <h2 className="subtitle">enter at your own risk</h2>
        </Message>
        <Message>
          <div className="menu">
            <h1 className="menutitle">choose wisely</h1>
            <h1>Which adventure would you like to embark on?</h1>
          </div>
          <h2><Link to="/zombie">Zombie 🧟‍♂️</Link></h2>
          <h2><Link to="/murdermystery">Murder Mystery 🍸</Link></h2>
        </Message>
      </div>
    );
  }
}

export default HomePage;
