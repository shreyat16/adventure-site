import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import NewsTemplate from "../../components/NewsTemplate/NewsTemplate"
import "./file.css"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class FilePage extends React.Component {
  
  render() {
    return (
      <div className="FilePage">
        <div>
          <ClownTitle>You open the file...</ClownTitle>
          <div className="text">SUSPECTS:</div>
          <img className="mugshot" src={'/mugshot.png'} alt="mugshot" />;
          <ClownTemplate>
              <div>
                  <Link to="/murder-mystery/bobby/"> Talk to Bobby ‍</Link>
              </div>
              <div>
                  <Link to="/murder-mystery/todo/"> Talk to Todo ‍</Link>
              </div>
              <div>
                  <Link to="/murder-mystery/lemon/"> Talk to Lemon ‍</Link>
              </div>
              <div>
                  <Link to="/murder-mystery/sherman/"> Talk to Sherman ‍</Link>
              </div>
              <div>
                  <Link to="/murder-mystery/bubbles/"> Talk to Bubbles ‍</Link>
              </div>
          </ClownTemplate>
          <div className="text">Now it is time for you to accuse a suspect. You only have one chance to accuse a clown, because if you don't get it on the first try, the clowns will be well on their way out of Brentville.</div>
          <div className="text">But, if you accuse the right clown, you will get Judy back and be the hero of the town.</div>
          <div className="text">Are you ready to move on?</div>
          <div className="accuse"><Link to="/murder-mystery/accuse/"> ACCUSE ‍</Link></div>
        </div>
        <h3 className="backbutton"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h3>
        <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
        <div className="footerstyle">Created by Shreya Thammana, © 2020 </div>
      </div>
    )
  }
}

export default FilePage
