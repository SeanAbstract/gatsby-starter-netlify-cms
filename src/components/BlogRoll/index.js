// @flow
import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, StaticQuery} from 'gatsby'
import styled from 'styled-components'
import {Container, Button, Col} from 'reactstrap'
import Img from 'gatsby-image'

import './styles.scss'

const BlogRoll = props => {
  const {data} = props
  const {edges: posts} = data.allMarkdownRemark

  return (
    <div className="row justify-content-center h-100">
      {posts &&
        posts.map(({node: post}) => {
          const {title, description, featuredimage} = post.frontmatter
          return (
            <StyledCol sm={12} md={4}>
              <OuterContainer>
                <ImgContainer>
                  {featuredimage && (
                    <Img
                      fluid={featuredimage.childImageSharp.fluid}
                      imgStyle={{height: '100%'}}
                      style={{height: '100%', objectFit: 'cover'}}
                    />
                  )}
                </ImgContainer>
                <div className="container blog-inner-container">
                  <h5 className="lead mb-0">{title}</h5>
                  <small className="mb-3 blog-desc">{description}</small>
                  <div>
                    <RoundButton className="btn btn-outline-secondary btn-lg" to={post.fields.slug}>
                      <ButtonText className="mb-0">Get Started</ButtonText>
                    </RoundButton>
                  </div>
                  <div className="mt-5">
                    <h3>&gt;</h3>
                  </div>
                </div>
              </OuterContainer>
            </StyledCol>
          )
        })}
    </div>
    // <div className="columns is-multiline">
    //   {posts &&
    //     posts.map(({node: post}) => (
    //       <div className="is-parent column is-6" key={post.id}>
    //         <article
    //           className={`blog-list-item tile is-child box notification ${
    //             post.frontmatter.featuredpost ? 'is-featured' : ''
    //           }`}
    //         >
    //           <header>
    //             {post.frontmatter.featuredimage ? (
    //               <div className="featured-thumbnail">
    //                 <PreviewCompatibleImage
    //                   imageInfo={{
    //                     image: post.frontmatter.featuredimage,
    //                     alt: `featured image thumbnail for post ${post.title}`,
    //                   }}
    //                 />
    //               </div>
    //             ) : null}
    //             <p className="post-meta">
    //               <Link className="title has-text-primary is-size-4" to={post.fields.slug}>
    //                 {post.frontmatter.title}
    //               </Link>
    //               <span> &bull; </span>
    //               <span className="subtitle is-size-5 is-block">{post.frontmatter.date}</span>
    //             </p>
    //           </header>
    //           <p>
    //             {post.excerpt}
    //             <br />
    //             <br />
    //             <Link className="button" to={post.fields.slug}>
    //               Keep Reading →
    //             </Link>
    //           </p>
    //         </article>
    //       </div>
    //     ))}
    // </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const RoundButton = styled(Link)`
  border-radius: 20px;
  border-color: white;
  border-width: 1px;
  font-size: 14px;
  color: white;
  line-height: 0.75rem;
`

const ButtonText = styled.p`
  line-height: 0.75rem;
  font-size: 0.75rem;
  margin-top: 3.5px;
  font-weight: 300;
  padding: 0 0.75rem;
`

const ImgContainer = styled.div`
  width: 100%;
  height: 40vh;
  position: absolute;
  opacity: 0;
  transition: 0.3s;

  @media (max-width: 426px) {
    height: 25vh;
  }
`

const StyledCol = styled(Col)`
  border-left: 0.5px solid #aaaaaa;

  :last-child {
    border-right: 0.5px solid #aaaaaa;
  }

  :hover {
    border: none;

    + div {
      border-left: none;
    }
  }

  @media (max-width: 426px) {
    border: none !important;
  }
`

const OuterContainer = styled.div`
  height: 40vh;
  color: #006fbb;
  transition: 0.2s;

  :hover {
    color: white;
    margin-top: -2rem;
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.17);

    ${ImgContainer} {
      opacity: 1;
    }

    small {
      color: white !important;
    }
  }

  @media (max-width: 426px) {
    height: 25vh;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: {order: DESC, fields: [frontmatter___date]}
          filter: {frontmatter: {templateKey: { eq: "blog-post"}}}
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
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
