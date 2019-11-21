const path = require('path')

const _ = require('lodash')
const {createFilePath} = require('gatsby-source-filesystem')
const {fmImagesToRelative} = require('gatsby-remark-relative-images')

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
              category
              featuredimage {
                publicURL
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges.filter(
      edge => edge.node.frontmatter.templateKey !== 'blog-post'
    )

    posts.forEach((edge, ndx) => {
      const {id} = edge.node
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}/index.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    const blogs = result.data.allMarkdownRemark.edges.filter(
      edge => edge.node.frontmatter.templateKey === 'blog-post'
    )

    blogs.forEach((edge, ndx) => {
      const {id} = edge.node

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(`src/templates/blog-post/index.js`),
        // additional data can be passed via context
        context: {
          id,
          prev: ndx === 0 ? null : blogs[ndx - 1].node,
          prevTitle: ndx === 0 ? null : blogs[ndx - 1].node.frontmatter.title,
          prevCategory: ndx === 0 ? null : blogs[ndx - 1].node.frontmatter.category,
          next: ndx === blogs.length - 1 ? null : blogs[ndx + 1].node,
          nextTitle: ndx === blogs.length - 1 ? null : blogs[ndx + 1].node.frontmatter.title,
          nextCategory: ndx === blogs.length - 1 ? null : blogs[ndx + 1].node.frontmatter.category,
        },
      })
    })
  })
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
