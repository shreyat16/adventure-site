import React from "react"
import Message from "../../components/Message/Message"
import { Link } from "gatsby"
// import BackButton from "../../components/BackButton/BackButton"

class ZChoice2Page extends React.Component {
  render() {
    return (
      <div className="zchoice2">
        <Message>
          <div>You chose: Go to the store</div>
           You get in your car and start backing up.
          Behind you, you hear your neighbors yelling at each other. “Why did
          you not tell me that you lost your job?!” Susan yells at her husband,
          Matt. “I didn’t lose my job!” Matt croaks back. That’s weird. You and
          Matt used to work at the same shake place. He got fired the other day
          for lying about stealing from the tip jar, even though I saw him
          sneaking money from it during breaks! Why was he lying again? This was
          not a good week for him. You back out and head to the store. At Hole
          Foods, you run into a strange man in the vegetable aisle. This man is
          piling packets and packets of spinach in his cart. He’s wearing a
          black oversized hoodie and has the hoodie pulled up so that shadows
          are falling on his face. Strange… who needs that much spinach?
        </Message>
        <Message>
          <h2>
            <Link to="/zombies/z-choice-2-1">Talk to him.</Link>
          </h2>
          <h2>
            <Link to="/zombies/z-choice-2-2">Ignore him and move on.</Link>
          </h2>
          {/* <BackButton/> */}
        </Message>
      </div>
    )
  }
}

export default ZChoice2Page
