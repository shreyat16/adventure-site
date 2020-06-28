import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import Center from "../../components/Center/Center"

class AccuseBubblesPage extends React.Component {
  
  render() {
    return (
      <div className="AccuseBubblesPage">
        <div>
          <ClownTitle>You accused Bubbles</ClownTitle>
          <ClownTemplate>
          <Center><img className="jailbubbles" src={'/jailbubbles.png'} alt="jailbubbles" /></Center>
          <div className="text">Bubbles: *sad face*</div>
              <Link to="/murder-mystery/loser/"> You were WRONG! Bubbles did not do it. Continue to see your fate... ‍</Link>
            </ClownTemplate>
            </div>
            <h3 className="backbutton"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h3>
            <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
            <div className="footerstyle">Created by Shreya Thammana, © 2020 </div>
      </div>
    )
  }
}

export default AccuseBubblesPage
