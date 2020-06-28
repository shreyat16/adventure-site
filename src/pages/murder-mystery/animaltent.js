import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import "./animaltent.css"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class AnimalTentPage extends React.Component {
  
  render() {
    return (
      <div className="AnimalTentPage">
        <ClownTitle>At the animal tent...</ClownTitle>
        <div className="text">This must be the popcorn spill the mom was talking about.</div>
        <img className="popimg" src={'/popcorn.png'} alt="popcorn" />;
        <div className="text">Hmmm… what’s this? Looks like some kind of note. Maybe Judy's kidnapper left it.</div>
        <div className="note">rifle shewer</div>
        <div className="text">Rifle shewer? What does that mean?</div>
        <div className="text">Oh! maybe you have to unscramble it!</div>
        <ClownTemplate>
            <div>WHAT DOES THE NOTE SAY?</div>
            <div className="fakelink">SHELF REWIRE</div>
            <div className="fakelink">SHREW RELIEF</div>
            <div className="fakelink">WIRE HERSELF</div>
          <Link to="/murder-mystery/ferriswheel/"> FERRIS WHEEL ‍</Link>
        </ClownTemplate>
        <h3 className="backbutton"><Link to="/murder-mystery/"> RETURN TO HOME ‍</Link></h3>
        <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
        <div className="footerstyle">Created by Shreya Thammana, © 2020 </div>
      </div>
    )
  }
}

export default AnimalTentPage
