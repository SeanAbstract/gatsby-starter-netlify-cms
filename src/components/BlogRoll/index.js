// @flow
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {Col, Row} from 'reactstrap'

import bgSlider from '../../img/bg-slider1.jpg'
import bgSlider2 from '../../img/bg-slider2.jpg'
import bgSlider3 from '../../img/bg-slider2-security.jpg'
import arrowRight from '../../img/arrow-right-blue.png'
import arrowRightWhite from '../../img/arrow-right.png'

import './styles.scss'

const content = [
  {
    title: 'Low commission/margin rate',
    description:
      'Take advantage of low margin rates to increase  the scale of your portfolio through margin financing.  Or play it safe and benefit from competitively low commission rates.',
    featuredImage: bgSlider,
  },
  {
    title: 'Greater security of account assets',
    description:
      'Snowball is a secure online platform, your account  assets are held in a trust under the supervision of  independent auditors to provide greater level of  protection. Trade with confidence.',
    featuredImage: bgSlider3,
  },
  {
    title: 'Exclusive info at your fingertips',
    description:
      'It only takes a few minutes to setup your free  Snowball account. The platform is really user friendly  and the Snowball customer support team is only a phone  call away if you need any assistance to get started.  Give it a try today. ',
    featuredImage: bgSlider2,
  },
]

class BlogRoll extends React.Component {
  state = {
    currentNdx: 0,
    isHovering: false,
    hoveringOver: null,
  }

  componentDidMount() {
    let interval
    if (window) {
      if (window.innerWidth < 578) {
        window.addEventListener('scroll', () => {
          console.log(window.scrollY)
          this.scrollActive()
        })
      } else {
        window.addEventListener('resize', () => {
          if (window.innerWidth < 578) {
            clearInterval(interval)
          } else {
            interval = setInterval(() => {
              this.setState(prevState => ({currentNdx: (prevState.currentNdx + 1) % 3}))
            }, 2000)
          }
        })
      }
    }
  }

  scrollActive = () => {
    if (window.scrollY > 4585 && window.scrollY < 4900) {
      this.setState({currentNdx: 0})
    } else if (window.scrollY > 4900 && window.scrollY < 5150) {
      this.setState({currentNdx: 1})
    } else {
      this.setState({currentNdx: 2})
    }
  }

  render() {
    return (
      <Row>
        {content.map((post, ndx) => {
          const {title, description, featuredImage} = post
          return (
            <StyledCol
              md={4}
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
                  <div className="blog-text-container">
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
                    <div className="get-started-button-container mt-5">
                      <Link to={'/how-it-works' || post.fields.slug}>
                        <StyledButton
                          className={`get-started-btn btn btn-outline-primary border-white rounded-pill button-hover pt-2 border-1 ${
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
                  <div className="mt-5 arrow-right-container">
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
    min-height: 25vh;
    height: 100%;
  }
`

const StyledCol = styled(Col)`
  border-left: 0.5px solid #ddd;
  height: 55vh;
  color: white;

  margin-bottom: 10px;

  :last-child {
    border-right: 0.5px solid #aaaaaa;

    @media (max-width: 426px) {
      border: none !important;
    }
  }

  :hover {
    border: none;

    + div {
      border-left: none;
    }
  }

  @media (max-width: 426px) {
    border: none !important;
    min-height: 25vh;
    height: 100%;
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
    min-height: 25vh;
  }
`
