import React from "react"
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import './Zombie.css'

export const query = graphql`
  query($slug: String!, $choiceOne: String, $choiceTwo: String) {

    current: markdownRemark(fields: { slug: { eq: $slug}}) {
      html
      frontmatter {
        title
      }
      fields {
        slug
        name
      }
    }

    choiceOne: markdownRemark(fields: { slug: { eq: $choiceOne}}) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }

    choiceTwo: markdownRemark(fields: { slug: { eq: $choiceTwo}}) {
      frontmatter {
        title
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
          <h3>Should you...</h3>
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
          {!data.choiceOne && !data.choiceTwo && (
            <div>
              <Link style={{color: "red"}} to="/zombies/lose">see your fate?</Link>
            </div>
          )}
        </div>
        <h3 className="backbutton"><Link to="/zombies/"> RETURN TO HOME ‍</Link></h3>
        <h3 className="backbutton"><Link to="/"> RETURN TO MAIN MENU ‍</Link></h3>
      </div>
    </div>
    
  )
}