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
            <h1>Which adventure would you like to embark on?</h1>
          </div>
          <h2>
            <Link to="/zombies/">Zombie 🧟‍♂️</Link>
          </h2>
          <h2>
            <Link to="/murder-mystery/">Murder Mystery 🍸</Link>
          </h2>
        </Message>
      </div>
    )
  }
}

export default HomePage
