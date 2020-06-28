import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import "./accuse.css"

class AccusePage extends React.Component {
  
  render() {
    return (
      <div className="AccusePage">
        <ClownTitle className="accusal">THE ACCUSAL</ClownTitle>
        <div>
            <div className="text">It is now time for you to accuse someone. You only get one shot, so make sure it's a good guess!</div>
            <img className="choose" src={'/choose.png'} alt="clowns" />;
            <div className="accusetemplate">
                    <div>
                        <Link to="/murder-mystery/accusebobby/"> Accuse Bobby ‍</Link>
                    </div>
                    <div>
                        <Link to="/murder-mystery/accusetodo/"> Accuse Todo ‍</Link>
                    </div>
                    <div>
                        <Link to="/murder-mystery/accuselemon/"> Accuse Lemon ‍</Link>
                    </div>
                    <div>
                        <Link to="/murder-mystery/accusesherman/"> Accuse Sherman ‍</Link>
                    </div>
                    <div>
                        <Link to="/murder-mystery/accusebubbles/"> Accuse Bubbles ‍</Link>
                    </div>
                </div>
          </div>
          <h3 className="backbutton"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h3>
          <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
          <div className="footerstyle">Created by Shreya Thammana, © 2020 </div>
      </div>
    )
  }
}

export default AccusePage
