import React from "react"
import Message from "../../components/Message/Message"
import "./win.css"
import {Link} from "gatsby"


class WinPage extends React.Component {
    render(){
    return (
      <div className="Win">
        <div className="wintitle">YOU WON!</div>
        <h3 className="back"><Link to="/zombies/"> RETURN TO HOME ‍</Link></h3>
        <h3 className="back"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
      </div>
    )
  }
}

export default WinPage
