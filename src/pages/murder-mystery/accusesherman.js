import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class AccuseShermanPage extends React.Component {
  
  render() {
    return (
      <div className="AccuseShermanPage">
        <div>
          <ClownTitle>You accused Sherman</ClownTitle>
            <ClownTemplate>
              <Link to="/murder-mystery/loser/"> continue ‍</Link>
            </ClownTemplate>
            </div>
      </div>
    )
  }
}

export default AccuseShermanPage
