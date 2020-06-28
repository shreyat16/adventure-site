import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import NewsTemplate from "../../components/NewsTemplate/NewsTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import "./sherman.css"

class ShermanPage extends React.Component {
  
  render() {
    return (
      <div className="ShermanPage">
        <div>
          <ClownTitle>at sherman's investigation</ClownTitle>
            <div className="text">You are now talking to Sherman:</div>
            <img className="accusesherman" src={'/accusesherman.png'} alt="accusesherman" />;
            <div className="text">“Having a nice day Sherman?”</div>
            <div className="text">“YES ACTUALLY I AM!”</div>
            <div className="text">“Why are you yelling at me? You’re pretty loud.”</div>
            <div className="text">“Oh sorry I’ll try to be quiet now. All my siblings don’t like me that much because of my loudness.”</div>
            <div className="text">“Well that’s unfortunate. Can you please write down your statement of what you did yesterday?”</div>
            <div className="text">“Sure.”</div>
            <div className="text">Sherman's Statement:</div>
            <div className="shermanstatement">I was near the hot dog stand in the morning. I was helping Dr. Fred hand out his new samples of churros to people. They're oil free and it's one of his new recipes. After lunch I went to the ferris wheel with Bobby and Todo. Todo and I slipped on the ICEE on the ground and now our clothes are stained. I was laughing at Todo later because birds were chasing him. He is terrified of birds. He’s also allergic to birds. After that I went back to my trailer to wash my clothes. I took the rest of the day off because of all the excitement in the day.</div>
            <div className="text">“How come you have more ICEE stains than Todo?”</div>
            <div className="text">“Well I fell in first so I must have gotten most of it off the ground.”</div>
            <div className="text">“Do you like kids?”</div>
            <div className="text">“Well not that much. I’m married but not planning to get kids anytime soon.”</div>
            <div className="text">“That’s all Sherman. Bye.”</div>
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

export default ShermanPage
