import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col} from 'reactstrap'
import Fade from 'react-reveal/Fade'

function InvestmentOptions() {
  return (
    <div className="d-flex flex-column stock-section-background h-100 w-100">
      <Row className="h-100 justify-content-center" style={{zIndex: '5'}}>
        <Col lg={9} md={11} sm={10} xs={10}>
          <InnerContainer>
            <Fade bottom>
              <WordTitle className="display-2">ACCESS</WordTitle>
              <WordTitle className="display-2">WORLD-CLASS</WordTitle>
              <WordTitle className="display-2">INVESTMENT</WordTitle>
              <WordTitle className="display-2">OPTION</WordTitle>
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
  line-height: 3.5rem;
`

export default InvestmentOptions
