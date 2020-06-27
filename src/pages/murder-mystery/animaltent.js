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
        <h1><div className="text">🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿🍿</div></h1>
        <div className="text">Hmmm… what’s this? Looks like some kind of note.</div>
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
      </div>
    )
  }
}

export default AnimalTentPage
