import React from "react"
import "./NewsTemplate.css"

class NewsTemplate extends React.Component {
  render() {
    return <div className="NewsTemplate">{this.props.children}</div>
  }
}

export default NewsTemplate
