// @flow
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {Col, Row} from 'reactstrap'

import bgSlider from '../../img/bg-slider1.jpg'
import bgSlider2 from '../../img/bg-slider2.jpg'
import arrowRight from '../../img/arrow-right-blue.png'
import arrowRightWhite from '../../img/arrow-right.png'

import './styles.scss'

const content = [
  {
    title: 'Low commission/margin rate',
    description: 'minimium comm./trade: 0 for HK, US$0.99 for US',
    featuredImage: bgSlider,
  },
  {
    title: 'Greater security of account assets',
    description: 'minimium comm./trade: 0 for HK, US$0.99 for US',
    featuredImage: bgSlider,
  },
  {
    title: 'Exclusive info at your fingertips',
    description: "Snowball's unique stock intel keeps you ahead of the game",
    featuredImage: bgSlider2,
  },
]

// const BlogRoll = props => {
//   const {data} = props
//   const {edges: posts} = data.allMarkdownRemark

//   return (
//     <Slider {...settings}>
//       {content.map(({node: post}) => {
//         const {title, description, featuredimage} = post.frontmatter
//         return (
//           <StyledCol>
//             <OuterContainer>
//               <ImgContainer>
//                 {featuredimage && (
//                   <Img
//                     fluid={featuredimage.childImageSharp.fluid}
//                     imgStyle={{height: '100%'}}
//                     style={{height: '100%', objectFit: 'cover'}}
//                   />
//                 )}
//                 <Overlay />
//               </ImgContainer>
//               <div className="container blog-inner-container">
//                 <div>
//                   <h5 className="lead mb-2">{title}</h5>
//                   <small className="mb-3 blog-desc mb-3">{description}</small>
//                   <div className="mt-5">
//                     <Link to={'/how-it-works' || post.fields.slug}>
//                       <StyledButton
//                         className="btn btn-outline-primary rounded-pill "
//                         type="button"
//                         style={{borderColor: 'white', color: 'white'}}
//                       >
//                         Get Started
//                       </StyledButton>
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="mt-5">
//                   <h3>&gt;</h3>
//                 </div>
//               </div>
//             </OuterContainer>
//           </StyledCol>
//         )
//       })}
//     </Slider>
//   )
// }
class BlogRoll extends React.Component {
  state = {
    currentNdx: 0,
    isHovering: false,
    hoveringOver: null,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({currentNdx: (prevState.currentNdx + 1) % 3}))
    }, 2000)
  }

  render() {
    return (
      <Row>
        {content.map((post, ndx) => {
          const {title, description, featuredImage} = post
          return (
            <StyledCol
              className={`${
                !this.state.isHovering && this.state.currentNdx === ndx ? 'card-hover' : ''
              }`}
              onMouseEnter={() => {
                this.setState({isHovering: true, hoveringOver: ndx})
              }}
              onMouseLeave={() => {
                this.setState({isHovering: false, hoveringOver: null})
              }}
            >
              <OuterContainer>
                <ImgContainer className="img-hover">
                  {featuredImage && (
                    <img
                      src={featuredImage}
                      style={{height: '100%', objectFit: 'cover', width: '100%'}}
                      className={`${
                        !this.state.isHovering && this.state.currentNdx === ndx ? 'img-hover' : ''
                      }`}
                    />
                  )}
                  <Overlay />
                </ImgContainer>
                <div className="container blog-inner-container">
                  <div className="" style={{marginTop: '20%'}}>
                    <h5
                      className={`lead mb-2 ${
                        !this.state.isHovering && this.state.currentNdx === ndx ? 'small-hover' : ''
                      }`}
                    >
                      {title}
                    </h5>
                    <small
                      className={`mb-3 blog-desc mb-3 ${
                        !this.state.isHovering && this.state.currentNdx === ndx ? 'small-hover' : ''
                      }`}
                    >
                      {description}
                    </small>
                    <div className="mt-5">
                      <Link to={'/how-it-works' || post.fields.slug}>
                        <StyledButton
                          className={`btn btn-outline-primary border-white rounded-pill button-hover w-50 pt-2 border-1 ${
                            !this.state.isHovering && this.state.currentNdx === ndx
                              ? 'button-hover'
                              : ''
                          }`}
                          type="button"
                        >
                          Get Started
                        </StyledButton>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-5">
                    <img
                      src={
                        (this.state.hoveringOver === null && this.state.currentNdx === ndx) ||
                        this.state.hoveringOver === ndx
                          ? arrowRightWhite
                          : arrowRight
                      }
                      alt=""
                      style={{height: '30px'}}
                    />
                  </div>
                </div>
              </OuterContainer>
            </StyledCol>
          )
        })}
      </Row>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogRoll

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const StyledButton = styled.button`
  opacity: 0;
  border-color: white !important;
  color: white !important;

  &:hover {
    background-color: white !important;
    color: #006fbb !important;
  }
`

const ImgContainer = styled.div`
  width: 100%;
  height: 55vh;
  position: absolute;
  opacity: 0;
  transition: 0.3s;

  @media (max-width: 426px) {
    height: 25vh;
  }
`

const StyledCol = styled(Col)`
  border-left: 0.5px solid #ddd;
  height: 55vh;
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #006fbb;
  transition: 0.2s;

  :hover {
    color: white;
    margin-top: -2rem;

    box-shadow: 0 11px 16px 0 rgba(0, 0, 0, 0.3);

    ${ImgContainer} {
      opacity: 1;
    }

    ${StyledButton} {
      opacity: 1;

      :hover {
        background-color: rgba(255, 255, 255, 0.5);
      }
    }

    small {
      color: white !important;
    }
  }

  @media (max-width: 426px) {
    height: 25vh;
  }
`

// export default () => {
//   const data = useStaticQuery(graphql`
//     query BlogRollQuery {
//       allMarkdownRemark(
//         sort: {order: DESC, fields: [frontmatter___date]}
//         filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
//       ) {
//         edges {
//           node {
//             excerpt(pruneLength: 400)
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//               description
//               templateKey
//               date(formatString: "MMMM DD, YYYY")
//               featuredpost
//               featuredimage {
//                 childImageSharp {
//                   fluid(maxWidth: 200, quality: 100) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   return <BlogRoll data={data} />
// }
