import React from "react"
import {Link, graphql} from 'gatsby'

export const query = graphql`
  query($slug: String!, $choiceOne: String, $choiceTwo: String) {

    current: markdownRemark(fields: { slug: { eq: $slug}}) {
      html
      frontmatter {
        title
      }
      fields {
        slug
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
  console.log(data)
  return (
    <div>
      <h1>{data.current.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.current.html}} />
      {data.choiceOne && (
        <Link style={{color: "#000000"}} to={data.choiceOne.fields.slug}>{data.choiceOne.frontmatter.title}</Link>
      )}
      {data.choiceTwo && (
        <Link style={{color: "#000000"}} to={data.choiceTwo.fields.slug}>{data.choiceTwo.frontmatter.title}</Link>
      )}
    </div>
  )
}