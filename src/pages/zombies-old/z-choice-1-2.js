import React from "react"
import Message from "../../components/Message/Message"
import { Link } from "gatsby"

class ZChoice12Page extends React.Component {
  render() {
    return (
      <div className="zchoice12">
        <Message>
          A hotdog because you think spinach is nasty: You both get your food
          and start eating. You finish eating and it’s time to pay the bill.
          It’s your girlfriend’s turn to pay. The waiter comes and asks for a
          card. “Kelly give him your card.” “No, I don't have my card. I guess
          you’re paying.” That’s weird. You can see her card in her phone case
          holder. You pay anyway because you think she’s messing with you. After
          you leave the restaurant, you tell her to pay you back. She tells you
          that she’s a broke college girl. You know for a fact that she won the
          lottery last month. Your girlfriend is acting weird with you and you
          don’t know what to do.
          <h2>
            <Link to="/zombies/z-choice-1-2-1">Say you have to go to your shift at the shake shop called Shake It Up</Link>
          </h2>
          <h2>
            <Link to="/zombies/z-choice-1-2-2">Say you need to run an errand</Link>
          </h2>
          
        </Message>
      </div>
    )
  }
}

export default ZChoice12Page
