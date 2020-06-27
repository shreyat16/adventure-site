import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import NewsTemplate from "../../components/NewsTemplate/NewsTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class TodoPage extends React.Component {
  
  render() {
    return (
      <div className="TodoPage">
        <div>
          <ClownTitle>at todo's investigation</ClownTitle>
            <div className="text">You are now talking to Todo:</div>
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

export default TodoPage
