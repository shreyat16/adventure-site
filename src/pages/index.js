import React, { Component } from "react"
import "./index.css"
import { Link } from "gatsby"
import Message from "../components/Message/Message"

class HomePage extends Component {
  render() {
    return (
      <div
        className="Index"
        style={{ backgroundImage: `url('/bg.jpg')` }}
      >
        <Message>
          <div className="menu">
            <h1 className="menutitle">Welcome to Choose Your Own Adventure</h1>
            <h1 className="menusubtitle">Which adventure would you like to embark on?</h1>
          </div>
          <div>
            <Link className= "pagelink" to="/zombies/">Zombie Survival 🧟‍♂️</Link>
          </div>
          <div>
            <Link className= "pagelink" to="/murder-mystery/">Murder Mystery 🍸</Link>
          </div>
        </Message>
      </div>
    )
  }
}

export default HomePage
