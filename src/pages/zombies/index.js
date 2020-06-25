import React from "react"
import Message from "../../components/Message/Message"
import { Link } from "gatsby"
import "./index.css"

class ZombiePage extends React.Component {
  render() {
    return (
      <div className="Zombie">
        <h1>Welcome to Zombie Adventure</h1>

        <div className="zstory">
          <Message>
            <h3>
              News Flash: People have been acting weird all over Brentville
              lately. I was talking to my boss the other day, and I casually
              asked him what shake he was drinking. It looked delicious! He
              said, I’m drinking a mud slide shake. Want some? I drank it and it
              tasted sweet. Definitely not what mud tastes like. Also, y’all
              should try out the new green spinach veggie patty! It tastes so
              good. That’s what my boss said. burger ad You turn off the TV.
              Doesn’t seem that interesting anyways. Also, who cares if her boss
              was lying? You decide you want to get out of the house.
            </h3>
          </Message>
          <Message>
            <h2>
              <Link to="/zombies/1">Meet up with your girlfriend</Link>
            </h2>
            <h2>
              <Link to="/zombies/2">Go to the store</Link>
            </h2>
          </Message>
        </div>
      </div>
    )
  }
}

export default ZombiePage
