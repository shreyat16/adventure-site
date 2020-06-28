import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import NewsTemplate from "../../components/NewsTemplate/NewsTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import "./todo.css"

class TodoPage extends React.Component {
  
  render() {
    return (
      <div className="TodoPage">
        <div>
          <ClownTitle>at todo's investigation</ClownTitle>
            <div className="text">You are now talking to Todo:</div>
            <img className="accusetodo" src={'/accusetodo.png'} alt="accusetodo" />;
            <div className="text">“Greetings Todo.”</div>
            <div className="text">“Hello, I'm Todo and I want to say that I wouldn't hurt someone like Judy. She's a very sweet girl and also polite. Oh sugar! What I mean is, that's how I imagine her.”</div>
            <div className="text">“You seem talkative. Write me a statement of what you were doing yesterday.”</div>
            <div className="text">Todo's Statement:</div>
            <div className="todostatement">I was in the clown tent all morning. I then left to go to watch the elephant act. Then I went to the ferris wheel with Bobby and Sherman. Someone spilt an ICEE on the ground and me and Sherman slipped. I then went to the dunk tank and saw Bobby get dunked by Judy’s brother. Then I went back to my trailer to take my makeup off. It was bothering me. It then was nighttime so the day ended.</div>
            <div className="text">“Are these the stains from the ICEE?”</div>
            <div className="text">“Yes it was a blue one. It didn't wash away in the washer. One of the birds I was petting ripped some of my wig out.”</div>
            <div className="text">“You sure are a big talker.”</div>
            <div className="text">“Well all my siblings are different in their own way. I love to talk a lot. Also I think Bubbles did it. He's very secretive because he is quiet. If anyone took Judy, it is him.”</div>
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

export default TodoPage
