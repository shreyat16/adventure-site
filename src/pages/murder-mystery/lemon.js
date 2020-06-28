import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import NewsTemplate from "../../components/NewsTemplate/NewsTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import "./lemon.css"

class LemonPage extends React.Component {
  
  render() {
    return (
      <div className="LemonPage">
        <div>
          <ClownTitle>at lemon's investigation</ClownTitle>
            <div className="text">You are now talking to Lemon:</div>
            <img className="accuselemon" src={'/accuselemon.png'} alt="accuselemon" />;
            <div className="text">“Hello Lemon.”</div>
            <div className="text">“Hi sir. I would like you to know that I would never kidnap Judy. I have a kid myself and I would be heartbroken if someone stole my Angel.”</div>
            <div className="text">“Can you write your statement on this paper? I want to know where you were yesterday.”</div>
            <div className="text">“Yes of course.”</div>
            <div className="text">Lemon’s Statement:</div>
            <div className="lemonstatement">I was at the ferris wheel all day. I was talking to the children waiting in the line and giving them free lollipops. I also took pictures with a few kids. After lunch I went to the circus and spent the rest of the day there with Bubbles.</div>
            <div className="text">“Here you go sir.”</div>
            <div className="text">“Can I ask you about the mud stains you have on your shirt?”</div>
            <div className="text">Oh these little guys? I was also with the elephants after lunch.”</div>
            <div className="text">“You didn't write that in your statement I have here.”</div>
            <div className="text">“Oh I'm sorry, it slipped my mind.”</div>
            <div className="text">“That's all I need from you. Bye.”</div>
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

export default LemonPage
