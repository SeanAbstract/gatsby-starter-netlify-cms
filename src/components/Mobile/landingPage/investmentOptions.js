import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col} from 'reactstrap'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade'

function InvestmentOptions() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "investment.png"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="h-100 w-100">
      <div style={{width: '100%', height: '100%', position: 'absolute', zIndex: '-1'}}>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          imgStyle={{height: '100%'}}
          style={{height: '100%', objectFit: 'cover'}}
        />
      </div>
      <Row className="h-100 justify-content-center">
        <Col lg={9} md={11} sm={10} xs={10}>
          <InnerContainer>
            <Fade bottom>
              <WordTitle>ACCESS</WordTitle>
              <WordTitle>WORLD-CLASS</WordTitle>
              <WordTitle>INVESTMENT</WordTitle>
              <WordTitle>OPTION</WordTitle>
            </Fade>
          </InnerContainer>
        </Col>
      </Row>
    </div>
  )
}

const InnerContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1.2rem 1rem;
`

const WordTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.75rem;

  font-size: 3rem;

  @media (min-width: 576px) {
    font-size: 2.75rem;
  }

  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 2.5rem;
  }

  @media (min-width: 992px) {
    font-size: 4rem;
    line-height: 2.65rem;
  }

  @media (min-width: 1200px) {
    font-size: 5rem;
    line-height: 3.25rem;
  }
`

export default InvestmentOptions
