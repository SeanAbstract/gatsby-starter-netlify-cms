// @flow
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {Col} from 'reactstrap'
import Slider from 'react-slick'

import bgSlider from '../../img/bg-slider1.jpg'
import bgSlider2 from '../../img/bg-slider2.jpg'
import arrowRight from '../../img/arrow-right-blue.png'

import './styles.scss'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
}

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

const BlogRoll = props => (
  <Slider {...settings}>
    {content.map(post => {
      const {title, description, featuredImage} = post
      return (
        <StyledCol>
          <OuterContainer>
            <ImgContainer>
              {featuredImage && (
                <img
                  src={featuredImage}
                  style={{height: '100%', objectFit: 'cover', width: '100%'}}
                />
              )}
              <Overlay />
            </ImgContainer>
            <div className="container blog-inner-container">
              <div className="" style={{marginTop: '20%'}}>
                <h5 className="lead mb-2">{title}</h5>
                <small className="mb-3 blog-desc mb-3">{description}</small>
                <div className="mt-5">
                  <Link to={'/how-it-works' || post.fields.slug}>
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
                <img src={arrowRight} alt="" style={{height: '30px'}} />
              </div>
            </div>
          </OuterContainer>
        </StyledCol>
      )
    })}
  </Slider>
)

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
  /* background-color: rgba(0, 0, 0, 0.3); */
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
  height: 40vh;
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
