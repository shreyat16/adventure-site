import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import NewsTemplate from "../../components/NewsTemplate/NewsTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class LemonPage extends React.Component {
  
  render() {
    return (
      <div className="LemonPage">
        <div>
          <ClownTitle>at lemon's investigation</ClownTitle>
            <div className="text">You are now talking to Lemon:</div>
            <ClownTemplate>
                <div>
                    <Link to="/murder-mystery/file/"> Return to file ‍</Link>
                </div>
            </ClownTemplate>
          </div>
      </div>
    )
  }
}

export default LemonPage
