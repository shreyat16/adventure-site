import React, { Component } from "react"
import ClownTemplate from "../../components/ClownTemplate/ClownTemplate"
import ClownTitle from "../../components/ClownTitle/ClownTitle"
import NewsTemplate from "../../components/NewsTemplate/NewsTemplate"
import "./index.css"
import {Link} from 'gatsby'

class MurderMysteryPage extends Component {
  render() {
    return (
      <div className="MurderMystery">
        <ClownTitle>
          <h1 className="clowntitle">Welcome to a Night with Clowns</h1>
        </ClownTitle>
        <div className="text">There is a carnival group that comes to Brentville every year. They stay for 3 days. 
          There are animal acts, games and a ferris wheel. This year, the group has recruited clowns. 
          There are 5 clowns; 4 brothers and 1 sister.</div>
        <NewsTemplate>
          News Flash:
          There has been a kid who has gone missing! 7-year-old Judy has been missing since yesterday. She was last seen at the carnival in the clown tent. We have recruited Detective Drew to find little Judy. the whole town has been looking everywhere. Detective Drew has investigated many cases similar to this so hopefully he can bring her back. We know for a fact that she was last with the clowns so they are key suspects. See you next week for a new interesting scoop.
        </NewsTemplate>
        <div className="text">You are going to play as Detective Drew. You have been hired to investigate the carnival. Here is the statement you got from the police. </div>
        <NewsTemplate>
        Searching for Judy West:<div>7-year-old girl with brown eyes and brown hair,
        last seen in front of the clown tent wearing a pink dress and light up shoes,
        she had pink ribbons in her braided hair,
        she came to the fair with her mother and older brother Connor, and his girlfriend Kelly,
        her parents are offering up to a $1000 reward.</div>
        </NewsTemplate>
        <ClownTemplate>
          <Link to="/murder-mystery/clown1/"> BEGIN INVESTIGATION ‍</Link>
        </ClownTemplate>
      </div>
    )
  }
}

export default MurderMysteryPage
