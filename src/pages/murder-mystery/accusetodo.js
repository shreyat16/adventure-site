import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class AccuseTodoPage extends React.Component {
  
  render() {
    return (
      <div className="AccuseTodoPage">
        <div>
          <ClownTitle>You accused Todo</ClownTitle>
            <ClownTemplate>
                <div><Link to="/murder-mystery/winner/"> continue ‍</Link></div>
            </ClownTemplate>
            </div>
      </div>
    )
  }
}

export default AccuseTodoPage
