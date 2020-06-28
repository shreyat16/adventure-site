import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import "./clowntent.css"

class ClownTentPage extends React.Component {
  
  render() {
    return (
      <div className="ClownTentPage">
        <div>
            <div className="backhome">
                <div className="text">No clues here! 🤡</div>
                <img className="clownimg" src={'/clown.png'} alt="clown" />;
                <ClownTemplate>
                    Maybe you should visit...
                  <Link to="/murder-mystery/animaltent/"> the animal tent ‍</Link>
                </ClownTemplate>
            </div>
          </div>
          <h3 className="backbutton"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h3>
          <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
          <div className="footerstyle">Created by Shreya Thammana, © 2020 </div>
      </div>
    )
  }
}

export default ClownTentPage
