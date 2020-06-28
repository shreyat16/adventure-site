import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import Center from "../../components/Center/Center"

class AccuseShermanPage extends React.Component {
  
  render() {
    return (
      <div className="AccuseShermanPage">
        <div>
          <ClownTitle>You accused Sherman</ClownTitle>
            <ClownTemplate>
            <Center><img className="jailsherman" src={'/jailsherman.png'} alt="jailsherman" /></Center>
            <div className="text">Sherman: "WHAT MADE YOU THINK IT WAS ME? NO ONE EVER LISTENS TO ME!!!!!!!!"</div>
              <Link to="/murder-mystery/loser/"> You were WRONG! Sherman did not do it. Continue to see your fate... ‍</Link>
            </ClownTemplate>
            </div>
            <h3 className="backbutton"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h3>
            <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
            <div className="footerstyle">Created by Shreya Thammana, © 2020 </div>
      </div>
    )
  }
}

export default AccuseShermanPage
