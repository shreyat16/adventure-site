import React from "react"
import Message from "../../components/Message/Message"
import "./winner.css"
import {Link} from "gatsby"


class WinnerPage extends React.Component {
    render(){
    return (
      <div className="Winner">
        <div className="wintitle">YOU SAVED JUDY!</div>
        <h3 className="back"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h3>
        <h3 className="back"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
      </div>
    )
  }
}

export default WinnerPage
