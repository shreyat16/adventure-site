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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }  
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
    <div className={`zombies-${data.current.fields.name}`}>
      {data.current.frontmatter.featuredImage && (
        <Img className="zombie__featured-image" fluid={data.current.frontmatter.featuredImage.childImageSharp.fluid} />
      )}
      <h1>{data.current.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.current.html}} />
      {data.choiceOne && (
        <div>
        <Link style={{color: "#000000"}} to={data.choiceOne.fields.slug}>{data.choiceOne.frontmatter.title}</Link>
        </div>
      )}
      {data.choiceTwo && (
        <div>
          <Link style={{color: "#000000"}} to={data.choiceTwo.fields.slug}>{data.choiceTwo.frontmatter.title}</Link>
        </div>
      )}
      {!data.choiceOne && !data.choiceTwo && (
        <div>
          <Link style={{color: "#000000"}} to="/zombies/lose">BRAINZZzz</Link>
        </div>
      )}
    </div>
  )
}