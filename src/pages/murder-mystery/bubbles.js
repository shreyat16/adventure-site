import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import NewsTemplate from "../../components/NewsTemplate/NewsTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import "./bubbles.css"

class BubblesPage extends React.Component {
  
  render() {
    return (
      <div className="BubblesPage">
        <ClownTitle>at bubbles' investigation</ClownTitle>
        <div>
            <div className="text">You are now talking to Bubbles:</div>
            <img className="accusebubbles" src={'/accusebubbles.png'} alt="accusebubbles" />;
            <div className="text">“Hello Bubbles.”</div>
            <div className="text">*waves at you*</div>
            <div className="text">“Are you not going to speak to me?”</div>
            <div className="text">*writes on paper* --I can’t speak--</div>
            <div className="text">“Oh ok. Write me your statement of your day yesterday.”</div>
            <div className="text">Bubbles' Statement</div>
            <div className="bubblesstatement">I really like animals so I was with the elephants all day. They make me feel calm. A new baby arrived so we inaugurated it by tying a blue ribbon around its neck. I then hung out with Lemon for the rest of the day. She’s my favorite sibling.</div>
            <div className="text">“Thanks for meeting with me Bubbles.”</div>
            <div className="text">*waves at you and smiles*</div>
            <ClownTemplate>
                <div>
                    <Link to="/murder-mystery/file/"> Return to file ‍</Link>
                </div>
            </ClownTemplate>
          </div>
          <h3 className="backbutton"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h3>
          <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
          <div className="footerstyle">Created by Shreya Thammana, © 2020 </div>
      </div>
    )
  }
}

export default BubblesPage
