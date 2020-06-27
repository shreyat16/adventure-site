import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class AccuseBubblesPage extends React.Component {
  
  render() {
    return (
      <div className="AccuseBubblesPage">
        <div>
          <ClownTitle>You accused Bubbles</ClownTitle>
            <ClownTemplate>
              <Link to="/murder-mystery/loser/"> continue ‍</Link>
            </ClownTemplate>
            </div>
      </div>
    )
  }
}

export default AccuseBubblesPage
