import React from 'react'
import styled from 'styled-components'
import {Button, Row, Col, Container} from 'reactstrap'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

export default function FourthSection() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "phone-mock.png"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <OuterContainer>
      <Row noGutters className="h-100 w-100 justify-content-center">
        <Col md={6} lg={3} className="py-5 h-100 d-none d-md-block">
          <Fade bottom>
            <div style={{width: '100%', height: '100%'}} className="d-none d-md-block">
              {/* <Img
                fluid={data.placeholderImage.childImageSharp.fluid}
                imgStyle={{
                  objectFit: 'contain',
                }}
                className="img-fluid ml-5 d-none d-md-block"
                style={{
                  maxHeight: '100%',
                }}
              /> */}
            </div>
          </Fade>
        </Col>
        <Col
          md={4}
          lg={3}
          className="d-flex justify-content-center align-items-start flex-column ml-4"
        >
          <Fade bottom>
            <div className="mb-3">
              <TitleWord className="display-2 text-primary">MAKE</TitleWord>
              <TitleWord className="display-2 text-primary">INFORMED</TitleWord>
              <TitleWord className="display-2 text-primary">DECISIONS</TitleWord>
            </div>
            <div>
              <h5 style={{fontSize: '28px'}}>Invest Globally in one account</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                Excepteur sintticus occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <button className="btn btn-outline-primary rounded-pill pt-2 px-4" type="button">
                How it works
              </button>
            </div>
          </Fade>
        </Col>
      </Row>
    </OuterContainer>
  )
}

const OuterContainer = styled(Container)`
  height: 70vh;
  background-color: white;

  @media (min-width: 768px) {
    height: 75vh;
  }
`
const TitleWord = styled.h1`
  line-height: 3.5rem;
`
