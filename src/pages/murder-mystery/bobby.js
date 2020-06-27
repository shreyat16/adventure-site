import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import NewsTemplate from "../../components/NewsTemplate/NewsTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class BobbyPage extends React.Component {
  
  render() {
    return (
      <div className="BobbyPage">
        <div>
          <ClownTitle>At Bobby's investigation</ClownTitle>
            <div className="text">You are now talking to Bobby:</div>
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

export default BobbyPage
