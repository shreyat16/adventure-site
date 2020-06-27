import React from "react"
import Message from "../../components/Message/Message"
import "./loser.css"
import {Link} from "gatsby"

class LoserPage extends React.Component {
  
  render() {
    return (
      <div className="Loser">
        <div>
            <h2 class="dead-dude">You lost! Judy's family will never see her again!</h2>
            <div className="backhome">
              <h1 className="dead-dude"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h1>
              <h1 className="dead-dude"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h1>
            </div>
          </div>
      </div>
    )
  }
}

export default LoserPage
