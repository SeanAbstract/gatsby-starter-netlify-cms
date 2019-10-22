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
      {stocks.map(stock => (
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
      ))}
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
