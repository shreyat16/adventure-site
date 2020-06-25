import React from "react"
import Message from "../../components/Message/Message"
import "./lose.css"

class LosePage extends React.Component {
  render() {
    return (
      <div className="Lose">
        <Message>
          You lose! The zombies got you!
        </Message>
      </div>
    )
  }
}

export default LosePage
