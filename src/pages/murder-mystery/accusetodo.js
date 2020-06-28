import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import Center from "../../components/Center/Center"

class AccuseTodoPage extends React.Component {
  
  render() {
    return (
      <div className="AccuseTodoPage">
        <div>
          <ClownTitle>You accused Todo</ClownTitle>
          <ClownTemplate>
          <Center><img className="jailtodo" src={'/jailtodo.png'} alt="jailtodo" /></Center>
          <div className="text">Todo: “I can’t believe you found me. I went through so much to cover my tracks. All I wanted was a kid to play with. My wife doesn’t like kids and she doesn’t want any, but I just want a kid to take to the circus. Guess kidnapping is the wrong way to go...</div>
                <div><Link to="/murder-mystery/winner/"> You were RIGHT! Continue to see your fate... ‍</Link></div>
            </ClownTemplate>
            </div>
            <h3 className="backbutton"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h3>
            <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
            <div className="footerstyle">Created by Shreya Thammana, © 2020 </div>
      </div>
    )
  }
}

export default AccuseTodoPage
