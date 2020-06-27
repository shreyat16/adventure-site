import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class PolicePage extends React.Component {
  
  render() {
    return (
      <div className="PolicePage">
        <div>
          <ClownTitle>talking to the police officer</ClownTitle>
            <div className="backhome">
                <div className="text">“Hi there, are you Detective Drew?”</div>
                <div className="text">“Yes! That’s me. Do you have any information for me?”</div>
                <div className="text">The police officer says, “Yes, as a matter of fact, I do.” “Here is a file containing the pictures of the 5 clowns, which are our major suspects right now. </div>
                <ClownTemplate>
                  <Link to="/murder-mystery/file/"> View File ‍</Link>
                </ClownTemplate>
            </div>
          </div>
      </div>
    )
  }
}

export default PolicePage
