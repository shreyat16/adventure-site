import React from "react"
import "./ClownTemplate.css"

class ClownTemplate extends React.Component {
  render() {
    return <div className="ClownTemplate">{this.props.children}</div>
  }
}

export default ClownTemplate
