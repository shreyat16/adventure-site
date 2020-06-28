import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import Center from "../../components/Center/Center"

class AccuseLemonPage extends React.Component {
  
  render() {
    return (
      <div className="AccuseLemonPage">
        <ClownTitle>You accused Lemon</ClownTitle>
        <div>
            <ClownTemplate>
            <Center><img className="jaillemon" src={'/jaillemon.png'} alt="jaillemon" /></Center>
        <div className="text">Lemon: "Now the kidnapper is free to roam. You didn't save Judy. How can you call yourself a detective?"</div>
              <Link to="/murder-mystery/loser/"> You were WRONG! Lemon did not do it. Continue to see your fate... ‍</Link>
            </ClownTemplate>
            </div>
            <h3 className="backbutton"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h3>
            <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
            <div className="footerstyle">Created by Shreya Thammana, © 2020 </div>
      </div>
    )
  }
}

export default AccuseLemonPage
