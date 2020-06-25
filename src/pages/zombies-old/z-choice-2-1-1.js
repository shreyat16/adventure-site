import React from "react"
import Message from "../../components/Message/Message"
import { Link } from "gatsby"

class ZChoice211Page extends React.Component {
  render() {
    return (
      <div className="zchoice211">
        <Message>
          You chose: Grab a ton of spinach because you want to be healthy too
          You are now driving to see your girlfriend. You call her and tell her
          to meet you at the park. You see her and hug her. She tells you that
          she’s scared about the lying people around town. You tell her it’s
          probably a thing that the adults are doing to be like the young cool
          kids. Say want to get some food She says yeah. You go to a restaurant.
          She orders a burger with a veggie patty because she’s trying a new
          diet. You choose: The same burger to support her = you die A hotdog
          because you think spinach is nasty = zchoice2112
        </Message>
        <Message>
          <h2>
            <Link to="/zombies/z-choice-2-1-1-2">
              A hotdog because you think spinach is nasty
            </Link>
          </h2>
        </Message>
      </div>
    )
  }
}

export default ZChoice211Page
