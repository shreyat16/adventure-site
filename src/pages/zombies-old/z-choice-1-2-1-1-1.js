import React from "react"
import Message from "../../components/Message/Message"
import { Link } from "gatsby"

class ZChoice12111Page extends React.Component {
  render() {
    return (
      <div className="zchoice12111">
        <Message>
        You chose: Go talk to the green zombie looking man. You tap the strange man on the shoulder and he growls at you.
        Unfortunately, he's a zombie. You try to tun but you are too late!

        <h2>
            <Link to="/zombies/lose">Continue</Link>
        </h2>
          
        </Message>
      </div>
    )
  }
}

export default ZChoice12111Page
