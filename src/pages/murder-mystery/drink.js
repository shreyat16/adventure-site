import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import "./drink.css"

class DrinkPage extends React.Component {
  
  render() {
    return (
      <div className="DrinkPage">
        <div>
          <ClownTitle>investigating the drink...</ClownTitle>
            <div className="text">Woah, looks like someone spilled a blue drink here.</div>
            <img className="blue" src={'/blue.png'} alt="drink" />;
            <div className="text">Wait a second. That looks like a blue slushie! Maybe it’s an ICEE drink! Maybe it was Judy who spilled this drink. You look around and a police officer comes up to you.</div>
            <ClownTemplate>
              <Link to="/murder-mystery/police/"> Talk to him ‍</Link>
            </ClownTemplate>
            </div>
            <h3 className="backbutton"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h3>
            <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
            <div className="footerstyle">Created by Shreya Thammana, © 2020 </div>
      </div>
    )
  }
}

export default DrinkPage
