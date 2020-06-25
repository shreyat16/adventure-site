import React from "react"
import { Link } from "gatsby"
import "./NavBar.css"

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <Link activeClassName="NavBar-active" to="/">
          Home
        </Link>
        <Link activeClassName="NavBar-active" to="/zombie/">
          Zombie
        </Link>
        <Link activeClassName="NavBar-active" to="/murder-mystery/">
          Murder Mystery
        </Link>
      </div>
    )
  }
}
export default NavBar
