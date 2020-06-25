import React from "react"
import Message from "../../components/Message/Message"
import { Link } from "gatsby"

class ZChoice122Page extends React.Component {
  render() {
    return (
      <div className="zchoice122">
        <Message>
          You leave and decide to blow your shift. You feel down in the dumps because your girlfriend is lying to you. You even blow off the plans at the beach you have together. 
          A few days go by and you finally step outside. You see zombies and you get bitten.
          <div>
              <Link to="/zombies/lose">Continue</Link>
          </div>
        </Message>
      </div>
    )
  }
}

export default ZChoice122Page
