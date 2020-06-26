import React from "react"
import { Link } from "gatsby"
import "./index.css"

class ZombiePage extends React.Component {
  render() {
    return (
      <div className="Zombie">
        <h1 className="welcome">Welcome to Zombie Adventure</h1>

        <div className="zstory">
            <h5 className="news">
              News Flash: People have been acting weird all over Brentville
              lately. I was talking to my boss the other day, and I casually
              asked him what shake he was drinking. It looked delicious! He
              said, I’m drinking a mud slide shake. Want some? I drank it and it
              tasted sweet. Definitely not what mud tastes like. Also, y’all
              should try out the new green spinach veggie patty! It tastes so
              good. That’s what my boss said. burger ad You turn off the TV.
              Doesn’t seem that interesting anyways. Also, who cares if her boss
              was lying? You decide you want to get out of the house.
            </h5>
          <div className="choices">
              <div className="choices-box">
                <h3 className="shouldyoutitle">Should you...</h3>
                <div>
                  <Link className="choices" to="/zombies/1">Meet up with your girlfriend</Link>
                </div>
                <div>
                  <Link className="choices" to="/zombies/2">Go to the store</Link>
                </div>
              </div>
          </div>
          <h3 className="backbutton"><Link to="/zombies/"> RETURN TO HOME ‍</Link></h3>
          <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
        </div>
      </div>
    )
  }
}

export default ZombiePage
