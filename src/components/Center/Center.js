import React from "react"
import "./Center.css"

class Center extends React.Component {
  render() {
    return <div className="Center">{this.props.children}</div>
  }
}

export default Center
