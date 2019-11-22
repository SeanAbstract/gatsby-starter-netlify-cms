import React from 'react'
import {StaticQuery, graphql, Link} from 'gatsby'
import styled from 'styled-components'

const MainBlogRoll = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark

  return posts.map(({node: post}, ndx) => (
    <GridItem
      className={`item-${(ndx + 1) % 9}`}
      key={post.fields.slug}
      to={post.fields.slug}
      bgImg={post.frontmatter.featuredimage}
    >
      <div>
        <p className="type">{post.frontmatter.category}</p>
        <h5>{post.frontmatter.title}</h5>
      </div>
    </GridItem>
  ))
}

const GridItem = styled(Link)`
  padding: 20px;
  height: 310px;
  color: white;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    color: white !important;
    &::before {
      filter: grayscale(0%);
    }
  }

  &::before {
    transition: filter 0.2s;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props =>
      props.bgImg.childImageSharp ? props.bgImg.childImageSharp.fluid.src : props.bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
    z-index: -1;
  }

  .type {
    margin-bottom: 0.5rem;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: {order: ASC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                category
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 445, quality: 95) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => {
      console.log(data)
      return <MainBlogRoll data={data} count={count} />
    }}
  />
)
