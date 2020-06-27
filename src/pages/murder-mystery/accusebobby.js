import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class AccuseBobbyPage extends React.Component {
  
  render() {
    return (
      <div className="AccuseBobbyPage">
        <div>
          <ClownTitle>You accused Bobby</ClownTitle>
            <ClownTemplate>
              <Link to="/murder-mystery/loser/"> continue ‍</Link>
            </ClownTemplate>
            </div>
      </div>
    )
  }
}

export default AccuseBobbyPage
