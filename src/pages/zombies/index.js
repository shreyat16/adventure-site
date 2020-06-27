import React from "react"
import { Link } from "gatsby"
import "./index.css"

class ZombiePage extends React.Component {
  render() {
    return (
      <div className="Zombie">
        <h1 className="welcome">Welcome to Zombie Survival</h1>

        <div className="zstory">
        <h5 className="news">
              What's on the news channel today? Looks kind of interesting... <div>WATCH NEWS ↘ </div>
          </h5>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GBztW1GoqLg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        <h5 className="news">
              You turn off the TV.
              Well that was a scoop. That burger sounds weird. Veggies? Instead of meat? What a bust. <div>You decide you want to get out of the house.</div>
          </h5>
          <div className="choices">
              <div className="choices-box">
                <h3 className="shouldyoutitle">Do you want to...</h3>
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
          <div className="footer">Created by Shreya Thammana, © 2020 </div>
        </div>
      </div>
    )
  }
}

export default ZombiePage
