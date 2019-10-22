// @flow
import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import makeCarousel from 'react-reveal/makeCarousel'

import StockSection from './stockSection'

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

function StockCarousel({stocks}: Props) {
  return (
    <Carousel defaultWait={3000} maxTurns={100}>
      {stocks.map(stock => {
        const {country, countryCode, commission} = stock
        return (
          <Fade top>
            <StockSection
              currency={countryCode}
              stockName={`${country} Stocks`}
              commissionAmt={commission[0].price}
              commissionDesc={commission[0].text}
              interestAmt={commission[1].price}
              interestDesc={commission[1].text}
            />
          </Fade>
        )
      })}
    </Carousel>
  )
}

const InnerCarousel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StockCarousel
