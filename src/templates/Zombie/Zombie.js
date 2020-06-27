import React from "react"
import {Link, graphql} from 'gatsby'
import './Zombie.css'

export const query = graphql`
  query($slug: String!, $choiceOne: String, $choiceTwo: String) {

    current: markdownRemark(fields: { slug: { eq: $slug}}) {
      html
      frontmatter {
        title
        isWinner
      }
      fields {
        slug
        name
      }
    }

    choiceOne: markdownRemark(fields: { slug: { eq: $choiceOne}}) {
      frontmatter {
        title
        isWinner
      }
      fields {
        slug
      }
    }

    choiceTwo: markdownRemark(fields: { slug: { eq: $choiceTwo}}) {
      frontmatter {
        title
        isWinner
      }
      fields {
        slug
      }
    }
  }
`

export default function Zombie({data}) {
  return (
    <div className="Zombies">
      <div className={`zombies-${data.current.fields.name}`}>
      <div className="titlestyle">
        <h1 className="titleanimation">You chose: {data.current.frontmatter.title}</h1>
      </div>
      <div className="story" dangerouslySetInnerHTML={{__html: data.current.html}} />
      <div className="choicesstyle">
        <h3>Do you want to...</h3>
        {data.choiceOne && (
          <div>
          <Link style={{color: "red"}} to={data.choiceOne.fields.slug}>{data.choiceOne.frontmatter.title}</Link>
          </div>
        )}
        {data.choiceTwo && (
          <div>
            <Link style={{color: "red"}} to={data.choiceTwo.fields.slug}>{data.choiceTwo.frontmatter.title}</Link>
          </div>
        )}
        {data.current.frontmatter.isWinner && (
          <div>
            <Link style={{color: "green"}} to="/zombies/win">see your fate?</Link>
          </div>
        )}
        {!data.choiceOne && !data.choiceTwo && !data.current.frontmatter.isWinner && (
          <div>
            <Link style={{color: "red"}} to="/zombies/lose">see your fate?</Link>
          </div>
        )}
      </div>
      <h3 className="backbutton"><Link to="/zombies/"> RETURN TO HOME ‍</Link></h3>
      <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
      <div className="footer">Created by Shreya Thammana, © 2020 </div>
    </div>
  </div>
  )
}