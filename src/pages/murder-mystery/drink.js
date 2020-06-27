import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class DrinkPage extends React.Component {
  
  render() {
    return (
      <div className="DrinkPage">
        <div>
          <ClownTitle>investigating the drink...</ClownTitle>
            <div className="text">Woah, looks like someone spilled a blue drink here.</div>
            <div className="text">Wait a second. That looks like a blue slushie! Maybe it’s an ICEE drink! Maybe it was Judy who spilled this drink. You look around and a police officer comes up to you.</div>
            <ClownTemplate>
              <Link to="/murder-mystery/police/"> Talk to him ‍</Link>
            </ClownTemplate>
            </div>
      </div>
    )
  }
}

export default DrinkPage
