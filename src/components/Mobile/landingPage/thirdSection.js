import React from 'react'
import {Row, Col, Container} from 'reactstrap'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import makeCarousel from 'react-reveal/makeCarousel'

import StockSection from './stockSection'
import InvestmentOptions from './investmentOptions'

const CarouselUI = ({children}: Props) => (
  <InnerCarousel className="h-25 w-100">{children}</InnerCarousel>
)
const Carousel = makeCarousel(CarouselUI)

function ThirdSection() {
  return (
    <StyledContainer className="p-0" fluid>
      <Row noGutters className="h-100">
        <Col md={6} xs={12} className="justify-content-center d-flex align-items-center">
          <InvestmentOptions />
        </Col>
        <Col
          md={6}
          xs={12}
          style={{backgroundColor: '#006fbb'}}
          className="justify-content-center d-flex align-items-center m-md-0 col-right"
        >
          <Carousel defaultWait={3000} maxTurns={100}>
            <Fade top>
              <StockSection
                currency="US$"
                stockName="US Stocks"
                commissionAmt="$0.002"
                commissionDesc="per share"
                interestAmt="$0.99"
                interestDesc="per deal the minimum"
              />
            </Fade>
            <Fade top>
              <StockSection
                currency="HK$"
                stockName="Hong Kong Stocks"
                commissionAmt="$0.00"
                commissionDesc="No commission on orders below HKD 60,000"
                interestAmt="0.03%"
                interestDesc="per share on orders above HKD 60,000"
              />
            </Fade>
          </Carousel>
        </Col>
      </Row>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  height: 80vh;

  @media (max-width: 767px) {
    height: 150vh;

    .col-right {
      height: 100vh;
    }
  }
`

const InnerCarousel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ThirdSection
