import React from "react"
import Message from "../../components/Message/Message"
import { Link } from "gatsby"

class ZChoice121Page extends React.Component {
  render() {
    return (
      <div className="zchoice121">
        <Message>
        You chose: Say you have to go to your shift at the shake shop called Shake It Up
        She says ok bye see you tomorrow then. Phew, you got rid of her. You wonder what’s up with her. Her diet is probably getting to her head. 
        You go to Shake It Up even though you're a little early. You put your apron on and start up a new order of a kale, spinach and blueberry shake. You call the boy up and you ask him how his day is going. It’s one of your classmates and he says he’s doing horrible. 
        You give him his drink and he pays for it. He takes a sip and says, oh did I say horrible? I don’t know why I said that. It’s been going great! 
        You keep working until its closing time.

        It's closing time! Do you...

        Clean up at Shake It Up and go home late
        Don't clean up and go home on time. Whoever comes in tomorrow gets to clean it up.

        <h2>
            <Link to="/zombies/z-choice-1-2-1-1">Clean up at Shake It Up and go home late</Link>
        </h2>
        <h2>
            <Link to="/zombies/z-choice-1-2-1-2">Don't clean up and go home on time. Whoever comes in tomorrow gets to clean it up.</Link>
        </h2>  
          
        </Message>
      </div>
    )
  }
}

export default ZChoice121Page