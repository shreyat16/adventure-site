import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import Center from "../../components/Center/Center"

class AccuseBobbyPage extends React.Component {
  
  render() {
    return (
      <div className="AccuseBobbyPage">
        <div>
          <ClownTitle>You accused Bobby</ClownTitle>
          <ClownTemplate>
          <Center><img className="jailbobby" src={'/jailbobby.png'} alt="jailbobby" /></Center>
          <div className="text">Bobby: "I can't believe you accused me. I told you I didn't do it!"</div>
              <Link to="/murder-mystery/loser/"> You were WRONG! Bobby did not do it. Continue to see your fate... ‍</Link>
            </ClownTemplate>
            </div>
            <h3 className="backbutton"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h3>
            <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
            <div className="footerstyle">Created by Shreya Thammana, © 2020 </div>
      </div>
    )
  }
}

export default AccuseBobbyPage
