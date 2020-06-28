import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import NewsTemplate from "../../components/NewsTemplate/NewsTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import "./bobby.css"

class BobbyPage extends React.Component {
  
  render() {
    return (
      <div className="BobbyPage">
        <div>
          <ClownTitle>At Bobby's investigation</ClownTitle>
            <div className="text">You are now talking to Bobby:</div>
            <img className="accusebobby" src={'/accusebobby.png'} alt="accusebobby" />;
            <div className="text">“Hi Bobby.”</div>
            <div className="text">*mutters* “Hi.”</div>
            <div className="text">“Please speak up and don’t give me an attitude.”</div>
            <div className="text">“Please write down a statement of where you were yesterday all day. On this paper.”</div>
            <div className="text">“Whatever to do to make you stop yapping.”</div>
            <div className="text">Bobby's Statement:</div>
            <div className="bobbystatement">I was in the dunk tank all day scowling at kids. It's my job to scowl. I'm a scary clown who hates children. I took my break for lunch. I went to the ferris wheel after lunch and rode on it with Todo and Sherman. I was scowling at a few kids when this boy hit me in. I was cold and wet all day. Then I went to the birds and fed them. I went into town after that to try out the famous spinach, kale, and blueberry shake. It was night when I went back to the tent.</div>
            <div className="text">“What is that blue ribbon in your pocket?”</div>
            <div className="text">“Why do you get to know and look at my personal stuff?”</div>
            <div className="text">“Answer my questions.”</div>
            <div className="text">“A new elephant arrived so I put it around its neck. These are the leftovers.”</div>
            <div className="text">“That's all Bobby. Bye.”</div>
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

export default BobbyPage
