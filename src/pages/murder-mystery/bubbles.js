import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import NewsTemplate from "../../components/NewsTemplate/NewsTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class BubblesPage extends React.Component {
  
  render() {
    return (
      <div className="BubblesPage">
        <ClownTitle>at bubbles' investigation</ClownTitle>
        <div>
            <div className="text">You are now talking to Bubbles:</div>
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

export default BubblesPage
