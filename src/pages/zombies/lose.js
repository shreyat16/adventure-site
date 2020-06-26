import React from "react"
import Message from "../../components/Message/Message"
import "./lose.css"
import {Link} from "gatsby"

class LosePage extends React.Component {
  
  render() {
    return (
      <div className="Lose">
        <div>
            <h2 class="dead-dude">You lost! The zombies got you! 🧟‍♂️</h2>
            <div className="backhome">
              <h1 className="dead-dude"><Link to="/zombies/"> RETURN TO HOME ‍</Link></h1>
            </div>
          </div>
      </div>
    )
  }
}

export default LosePage
