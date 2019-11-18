/* eslint-disable import/no-dynamic-require */
// @flow
import React from 'react'
import styled from 'styled-components'
import {CardImg, CardBody, CardTitle, Row, Container, Col} from 'reactstrap'
import makeCarousel from 'react-reveal/makeCarousel'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import facebookIcon from '../img/ico-facebook.png'
import amazonIcon from '../img/ico-amazon.png'
import netflixIcon from '../img/ico-netflix.png'
import appleIcon from '../img/ico-apple.png'
import googleLogo from '../img/ico-google.png'
import alibabaIcon from '../img/alibaba.png'

type Props = {
  icon: string,
  stockPrice: string,
  stockPercentage: string,
  companyName: string,
  bgColor: string,
  stockCode: String,
  stocks: any,
  delay: number,
}

type CarouselProps = {
  children: any,
}

const CarouselUI = ({children}: CarouselProps) => (
  <>
    <InnerCarousel className="w-100 h-25">{children}</InnerCarousel>
  </>
)
const Carousel = makeCarousel(CarouselUI)

const StockCard = (props: Props) => {
  function getIcon(abbreviation) {
    if (abbreviation == 'FB') {
      return facebookIcon
    }

    if (abbreviation == 'NFLX') {
      return netflixIcon
    }

    if (abbreviation == 'AMZN') {
      return amazonIcon
    }

    if (abbreviation == 'GOOGL') {
      return googleLogo
    }

    if (abbreviation == 'AAPL') {
      return appleIcon
    }

    if (abbreviation == 'ALB') {
      return alibabaIcon
    }
  }

  return (
    <StyledCard>
      <Row noGutters>
        <Col md={12} xs={5}>
          <ImgContainer
            style={{
              borderBottom: '2px solid #F5F5F5',
              overflow: 'hidden',
            }}
            className="d-flex justify-content-center align-items-center img-container"
          >
            <Carousel defaultWait={props.delay} maxTurns={100} className="h-100">
              {props.stocks.map(stock => (
                <Slide left>
                  <div
                    style={{
                      position: 'absolute',
                      top: '-125px',
                      left: 0,
                      height: '265px',
                      width: '100%',
                      background: stock.bgColor,
                    }}
                  />
                  <div className="d-flex m-auto h-100">
                    <CardImg
                      width="100%"
                      src={getIcon(stock.abbreviation)}
                      alt="Card image cap"
                      style={{
                        margin: 'auto',
                        height: '100px',
                        width: '100px',
                        marginTop: '-15px',
                        objectFit: 'contain',
                        zIndex: 100,
                      }}
                    />
                  </div>
                </Slide>
              ))}
            </Carousel>
          </ImgContainer>
        </Col>
        <Col md={12} xs={7}>
          <StyledCardBody>
            <Carousel defaultWait={props.delay} maxTurns={100}>
              {props.stocks.map(stock => (
                <Fade>
                  <Container>
                    <Row className="justify-content-between">
                      <CardTitle style={{fontSize: '14px'}}>{stock.abbreviation}</CardTitle>
                      <div className="d-flex flex-column align-items-start">
                        <StockPrice className="mb-1">{stock.value}</StockPrice>
                        <StockPercentage>
                          {stock.rate} ({stock.percent})
                        </StockPercentage>
                      </div>
                    </Row>
                    <Row>
                      <small className="text-muted">{stock.stock}</small>
                    </Row>
                  </Container>
                </Fade>
              ))}
            </Carousel>
          </StyledCardBody>
        </Col>
      </Row>
    </StyledCard>
  )
}
const InnerCarousel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 2px solid #f5f5f5 !important;
  transition: 250ms linear;

  &:hover {
    box-shadow: 0 0 2px 0 rgba(137, 146, 177, 0.15), 0 3px 10px 0 rgba(137, 146, 177, 0.1);
  }
`

const ImgContainer = styled.div`
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  @media (min-width: 768px) {
    height: 225px;
  }
`

const StyledCardBody = styled(CardBody)`
  padding: 1rem 0.75rem 0.15rem;
  min-height: 120px;

  @media (min-width: 376px) {
    padding: 1rem 1rem 0.15rem;
  }
`

const StockPrice = styled.h5`
  font-weight: 300;
`

const StockPercentage = styled.p`
  color: #68a73c;
`

export default StockCard
