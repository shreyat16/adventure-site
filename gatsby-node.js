/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.onCreateNode = ({ node, actions, getNode}) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // Get the parent node
    const parent = getNode(node.parent)

    // Create a field on this node for the "collection" of the parent
    // NOTE: This is necessary so we can filter `allMarkdownRemark` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents of type `post`.
    createNodeField({
      node,
      name: "collection",
      value: parent.sourceInstanceName,
    })
    createNodeField({
      node,
      name: "name",
      value: parent.name,
    })

    switch (parent.sourceInstanceName) {
      case "zombies":
        createNodeField({
          node,
          name: "slug",
          value: `/zombies/${parent.name}`,
        })
        break
      case "murder-mystery":
        createNodeField({
          node,
          name: "slug",
          value: `/murder-mystery/${parent.name}`,
        })
        break
    }
  }
}

exports.createPages = async (args) => {
  createZombiePages(args)
}

async function createZombiePages({graphql, actions}) {
  const {createPage} = actions

  const zombies = await graphql(`
  query {
    allMarkdownRemark(filter: {fields: {collection: {eq: "zombies"}}}) {
      edges {
        node {
          fields {
            slug
            name
          }
        }
      }
    }
  }
  `)
  if (zombies.error) throw zombie.error

  zombies.data.allMarkdownRemark.edges.forEach(edge => {

    // find all choices for current page
    const choices = zombies.data.allMarkdownRemark.edges.filter(edgeMatch => {
      // matches must have current page length + 1
      if (edge.node.fields.name.split('-').length + 1 === edgeMatch.node.fields.name.split('-').length) {
        // matches must have current page as root
        if (edgeMatch.node.fields.name.indexOf(edge.node.fields.name) === 0) {
          return true
        }
      }
    })

    const choiceOne = choices.find(choice => '1' === choice.node.fields.name.split('-')[choice.node.fields.name.split('-').length - 1])
    const choiceTwo = choices.find(choice => '2' === choice.node.fields.name.split('-')[choice.node.fields.name.split('-').length - 1])

    createPage({
      component: path.resolve("src/templates/Zombie/Zombie.js"),
      path: edge.node.fields.slug,
      context: {
        slug: edge.node.fields.slug,
        choiceOne: choiceOne && choiceOne.node.fields.slug,
        choiceTwo: choiceTwo && choiceTwo.node.fields.slug,
      }
    })
  })
}