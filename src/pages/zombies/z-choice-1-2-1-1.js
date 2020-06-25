import React from "react"
import Message from "../../components/Message/Message"
import { Link } from "gatsby"

class ZChoice1211Page extends React.Component {
  render() {
    return (
      <div className="zchoice1211">
        <Message>
        You chose: Clean up at Shake It Up and go home late
        You start cleaning but hear something outside. You walk to the windows and see someone lurking in the shadows. You tell them that it's getting late and they should be heading home. They turn and they look like a zombie from a movie.
        “Woah that’s a cool costume you got there but don't you think it's a little early for halloween?”
        The man groans and trunks around. His eyes are green and his whole body is made up of different green shades.

        <h2>
            <Link to="/zombies/z-choice-1-2-1-1-1">Go talk to the green zombie looking man.</Link>
        </h2>
        <h2>
            <Link to="/zombies/z-choice-1-2-1-2-2">Lock up the store so he won't be able to get to you.</Link>
        </h2>  
          
        </Message>
      </div>
    )
  }
}

export default ZChoice1211Page
