// @flow
import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import {Row, Col} from 'reactstrap'
import Img from 'gatsby-image'
import Slider from 'react-slick'

import './styles.scss'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
}

const BlogRoll = props => {
  const {data} = props
  const {edges: posts} = data.allMarkdownRemark

  return (
    <Slider {...settings}>
      {posts.map(({node: post}) => {
        const {title, description, featuredimage} = post.frontmatter
        return (
          <StyledCol>
            <OuterContainer>
              <ImgContainer>
                {featuredimage && (
                  <Img
                    fluid={featuredimage.childImageSharp.fluid}
                    imgStyle={{height: '100%'}}
                    style={{height: '100%', objectFit: 'cover'}}
                  />
                )}
                <Overlay />
              </ImgContainer>
              <div className="container blog-inner-container">
                <div>
                  <h5 className="lead mb-2">{title}</h5>
                  <small className="mb-3 blog-desc mb-3">{description}</small>
                  <div className="mt-5">
                    <Link to={post.fields.slug}>
                      <StyledButton
                        className="btn btn-outline-primary rounded-pill "
                        type="button"
                        style={{borderColor: 'white', color: 'white'}}
                      >
                        Get Started
                      </StyledButton>
                    </Link>
                  </div>
                </div>
                <div className="mt-5">
                  <h3>&gt;</h3>
                </div>
              </div>
            </OuterContainer>
          </StyledCol>
        )
      })}
    </Slider>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const StyledButton = styled.button`
  opacity: 0;
`

const ImgContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: absolute;
  opacity: 0;
  transition: 0.3s;

  @media (max-width: 426px) {
    height: 25vh;
  }
`

const StyledCol = styled(Col)`
  border-left: 0.5px solid #ddd;
  height: 50vh;
  /* :last-child {
    border-right: 0.5px solid #aaaaaa;
  } */

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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #006fbb;
  transition: 0.2s;

  :hover {
    color: white;
    margin-top: -2rem;
    padding-top: 2rem;
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.17);

    ${ImgContainer} {
      opacity: 1;
    }

    ${StyledButton} {
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

export default () => {
  const data = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}
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
              description
              templateKey
              date(formatString: "MMMM DD, YYYY")
              featuredpost
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 200, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return <BlogRoll data={data} />
}
