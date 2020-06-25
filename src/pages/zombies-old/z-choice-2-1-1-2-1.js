import React from "react"
import Message from "../../components/Message/Message"
import { Link } from "gatsby"

class ZChoice21121 extends React.Component {
  render() {
    return (
      <div className="zchoice21121">
        <Message>
          You chose: Go to a late night party with the bros Looks like you made
          the wrong choice! There was a zombie at the party and you got
          infected.
          <div>
            <Link to="/zombies/lose">Continue</Link>
          </div>
        </Message>
      </div>
    )
  }
}

export default ZChoice21121
