/* eslint-disable import/no-dynamic-require */
// @flow
import React from 'react'
import styled from 'styled-components'
import {Card, CardImg, CardBody, CardTitle, Row, Container, Col} from 'reactstrap'
import makeCarousel from 'react-reveal/makeCarousel'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

type Props = {
  icon: string,
  stockPrice: string,
  stockPercentage: string,
  companyName: string,
  bgColor: string,
  stockCode: String,
  stocks: any,
}

type CarouselProps = {
  children: any,
}

const CarouselUI = ({children}: CarouselProps) => (
  <InnerCarousel className="h-25 w-100 d-flex justify-content-center align-items-center">
    {children}
  </InnerCarousel>
)
const Carousel = makeCarousel(CarouselUI)

const StockCard = (props: Props) => (
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
          <Carousel defaultWait={3000} maxTurns={100} className="h-100">
            {props.stocks.map(stock => (
              <Slide left>
                <div className="d-flex m-auto">
                  <CardImg
                    width="100%"
                    src={stock.image.childImageSharp.fluid.src}
                    alt="Card image cap"
                    style={{margin: 'auto', height: '50px', width: '50px', objectFit: 'contain'}}
                  />
                </div>
              </Slide>
            ))}
          </Carousel>
        </ImgContainer>
      </Col>
      <Col md={12} xs={7}>
        <StyledCardBody>
          <Carousel defaultWait={3000} maxTurns={100}>
            {props.stocks.map(stock => (
              <Fade>
                <Container>
                  <Row className="justify-content-between">
                    <CardTitle>{stock.abbreviation}</CardTitle>
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
