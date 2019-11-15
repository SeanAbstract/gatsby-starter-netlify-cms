import React from 'react'
import styled from 'styled-components'
import {Container, Button, Row, Col} from 'reactstrap'
import Fade from 'react-reveal/Fade'

import StockCard from './stockCard'

function SeventhSection() {
  return (
    <StyledContainer fluid>
      <Row className="h-100 justify-content-around">
        <Col md={5} lg={3} className="justify-content-center d-flex flex-column">
          <Fade bottom>
            <div className="mb-3">
              <TitleWord className="display-2 text-primary">TRADE</TitleWord>
              <TitleWord className="display-2 text-primary">GLOBAL</TitleWord>
              <TitleWord className="display-2 text-primary">STOCKS</TitleWord>
            </div>
            <div>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                Excepteur sintticus occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <button className="btn btn-outline-primary rounded-pill pt-2 px-4" type="button">
                Start Trading
              </button>
            </div>
          </Fade>
        </Col>
        <Col md={6} lg={5} className="justify-content-center align-items-center d-flex">
          <Row className="w-100" noGutters>
            <Col md={4} sm={12}>
              <Fade bottom>
                <StockCard
                  bgColor="#3b5998"
                  stockPrice="187.39"
                  stockPercentage="0.95 (0.05%)"
                  companyName="Facebook"
                  icon="facebook"
                  stockCode="FB"
                />
              </Fade>
            </Col>
            <Col md={4} className="d-none d-md-block">
              <Fade bottom>
                <StockCard
                  bgColor="#3b5998"
                  stockPrice="187.39"
                  stockPercentage="0.95 (0.05%)"
                  companyName="Facebook"
                  icon="facebook"
                  stockCode="FB"
                />
              </Fade>
            </Col>
            <Col md={4} className="d-none d-md-block">
              <Fade bottom>
                <StockCard
                  bgColor="#3b5998"
                  stockPrice="187.39"
                  stockPercentage="0.95 (0.05%)"
                  companyName="Facebook"
                  icon="facebook"
                  stockCode="FB"
                />
              </Fade>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  height: 100vh;
  padding: 0 2rem;
  background-color: #f5f5f5;

  @media (min-width: 1024px) {
    height: 70vh;
  }
`

const Paragraph = styled.p`
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.25;
`

const TitleWord = styled.h1``

const RoundButton = styled(Button)`
  border-radius: 20px;
  border-width: 2px;
  font-size: 14px;
  color: ${props => props.theme.primary};
  border-color: ${props => props.theme.primary};
  line-height: 0.75rem;
`

const ButtonText = styled.p`
  line-height: 0.75rem;
  font-size: 0.75rem;
  margin-top: 3.5px;
  font-weight: normal;
  padding: 0 0.75rem;
`

export default SeventhSection
