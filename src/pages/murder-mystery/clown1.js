import React from "react"
import {Link} from "gatsby"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"

class Clown1Page extends React.Component {
  
  render() {
    return (
      <div className="Clown1Page">
        <div>
          <ClownTitle>at the carnival</ClownTitle>
                <div className="text">You come to the carnival grounds. You start to look around. Keep in mind, you only have 2 more days to look for her. The carnival will be leaving after 2 days. You go into a tent that has been reserved for you and Judy’s family. Inside you meet up with the mother, her son and his girlfriend.</div>
                <div className="text"><div>The mother, crying, starts to talk.</div> “We were with Judy all day. We first went to play cornhole, my kids favorite game. Then we went to the cotton candy booth. Her favorite color is blue so she got a blueberry flavored one. She also asked me for a blue ICEE so we bought her that too. After that we went to the elephant act which are her favorite animals. We got popcorn too but she spilled them on the ground because one of the elephants trumpet startled her.” Picture of judy saying oh sugar</div>
                <div className="text">We then took her to the dunk tank. She kept begging to go to the clown tent but we’re all creeped out by clowns so we wouldn’t let her. We went to the dunk tank and Connor had just hit the target when I turned around and Judy was gone! We went searching for her immediately, and then went to the police. They were no help. So we asked for special help. That's when they gave me your number and now we are here.</div>
                <ClownTemplate>
                  <div>Do you want to...</div>
                  <div><Link to="/murder-mystery/animaltent/"> Visit Animal Tent ‍</Link></div>
                  <Link to="/murder-mystery/clowntent/"> Visit Clown Tent ‍</Link>
                </ClownTemplate>
          </div>
      </div>
    )
  }
}

export default Clown1Page
