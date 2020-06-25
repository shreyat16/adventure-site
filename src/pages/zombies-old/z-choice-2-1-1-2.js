import React from "react"
import Message from "../../components/Message/Message"
import { Link } from "gatsby"

class ZChoice2112Page extends React.Component {
  render() {
    return (
      <div className="zchoice2112">
        <Message>
          You chose: A hotdog because you think spinach is nasty You both get
          your food and start eating. You finish eating and it’s time to pay the
          bill. It’s your girlfriend’s turn to pay. The waiter comes and asks
          for a card. “Kelly give him your card.” “No, I don't have my card. I
          guess you’re paying.” That’s weird. You can see her card in her phone
          case holder. You pay anyway because you think she’s messing with you.
          After you leave the restaurant, she tells you that she’s a broke
          college girl. You know for a fact that she won the lottery last month.
          Your girlfriend is acting weird with you and you don’t know what to
          do. Should you: Go to a late night party with the bros = zchoice21121
          or.... Go home = zchoice21122
        </Message>
        <Message>
          <h2>
            <Link to="/zombies/z-choice-2-1-1-2-1">
              Go to a late night party with the bros
            </Link>
          </h2>
        </Message>
      </div>
    )
  }
}

export default ZChoice2112Page
