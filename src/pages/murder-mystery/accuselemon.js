import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class AccuseLemonPage extends React.Component {
  
  render() {
    return (
      <div className="AccuseLemonPage">
        <ClownTitle>You accused Lemon</ClownTitle>
        <div>
            <ClownTemplate>
              <Link to="/murder-mystery/loser/"> continue ‍</Link>
            </ClownTemplate>
            </div>
      </div>
    )
  }
}

export default AccuseLemonPage
