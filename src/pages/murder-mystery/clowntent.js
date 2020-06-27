import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"

class ClownTentPage extends React.Component {
  
  render() {
    return (
      <div className="ClownTentPage">
        <div>
            <div className="backhome">
                <div className="text">No clues here! 🤡</div>
                <ClownTemplate>
                    Maybe you should visit...
                  <Link to="/murder-mystery/animaltent/"> the animal tent ‍</Link>
                </ClownTemplate>
            </div>
          </div>
      </div>
    )
  }
}

export default ClownTentPage
