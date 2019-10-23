// @flow
import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import {Row, Col, Container} from 'reactstrap'
import makeCarousel from 'react-reveal/makeCarousel'

import StockCard from '../StockCard'

type Props = {
  stocks: Array<{
    country: string,
    countryCode: string,
    commission: [
      {
        price: string,
        text: string,
      }
    ],
  }>,
}

type CarouselProps = {
  children: any,
}

const CarouselUI = ({children}: CarouselProps) => (
  <InnerCarousel className="h-25 w-100">{children}</InnerCarousel>
)
const Carousel = makeCarousel(CarouselUI)

function LiveStockCarousel({stocks}: Props) {
  const stockCardOne = stocks.filter((stock, key) => key % 3 === 0)
  const stockCardTwo = stocks.filter((stock, key) => key % 3 === 1)
  const stockCardThree = stocks.filter((stock, key) => key % 3 === 2)

  return (
    <>
      <Col md={4} sm={12}>
        <Fade bottom>
          <StockCard
            bgColor="#3b5998"
            stockPrice="187.39"
            stockPercentage="0.95 (0.05%)"
            companyName="Facebook"
            icon="facebook"
            stockCode="FB"
            stocks={stockCardOne}
            />
        </Fade>
      </Col>
      <Col md={4} sm={12}>
        <Fade bottom>
          <StockCard
            bgColor="#3b5998"
            stockPrice="187.39"
            stockPercentage="0.95 (0.05%)"
            companyName="Facebook"
            icon="facebook"
            stockCode="FB"
            stocks={stockCardTwo}
            />
        </Fade>
      </Col>
      <Col md={4} sm={12}>
        <Fade bottom>
          <StockCard
            bgColor="#3b5998"
            stockPrice="187.39"
            stockPercentage="0.95 (0.05%)"
            companyName="Facebook"
            icon="facebook"
            stockCode="FB"
            stocks={stockCardThree}
            />
        </Fade>
      </Col>
    </>
  )
}

export default LiveStockCarousel
