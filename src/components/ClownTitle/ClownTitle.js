import React from "react"
import "./ClownTitle.css"

class ClownTitle extends React.Component {
    
  render() {
    return <div className="ClownTitle">{this.props.children}</div>
  }
}

export default ClownTitle


