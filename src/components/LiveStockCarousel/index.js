/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, {useEffect, useState} from 'react'
import Fade from 'react-reveal/Fade'
import {Col} from 'reactstrap'

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

const API_KEY = 'QTDA5DR1PXTSLRJ3'

function LiveStockCarousel({stocks}: Props) {
  const [myStocks, setStocks] = useState({
    APPL: '',
    FB: '',
    GOOGL: '',
  })

  useEffect(() => {
    // console.log(stocks)
    // stocks.forEach(stock => {
    //   const SYM = stock.abbreviation
    //   fetch(
    //     `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${SYM}&interval=5min&apikey=${API_KEY}`
    //   ).then(async response => {
    //     const json = await response.json()
    //     const data = json['Time Series (5min)']
    //     console.log(json['Time Series (5min)'])
    //     if (data !== undefined) {
    //       const keys = Object.keys(data)
    //       console.log(keys)
    //     }
    //     // console.log(json['Time Series (5min)']['2019-12-04 16:00:00'])
    //     // const latestValue = json['Time Series (5min)'][keys[0]]['2. high']
    //     setStocks({
    //       ...myStocks,
    //       [SYM]: 'lol',
    //     })
    //     console.log(myStocks)
    //   })
    // })
  }, [])

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
            delay={3000}
          />
        </Fade>
      </Col>
      <Col md={4} sm={12} className="d-none d-md-block">
        <Fade bottom>
          <StockCard
            bgColor="#3b5998"
            stockPrice="187.39"
            stockPercentage="0.95 (0.05%)"
            companyName="Facebook"
            icon="facebook"
            stockCode="FB"
            stocks={stockCardTwo}
            delay={3000}
          />
        </Fade>
      </Col>
      <Col md={4} sm={12} className="d-none d-md-block">
        <Fade bottom>
          <StockCard
            bgColor="#3b5998"
            stockPrice="187.39"
            stockPercentage="0.95 (0.05%)"
            companyName="Facebook"
            icon="facebook"
            stockCode="FB"
            stocks={stockCardThree}
            delay={3000}
          />
        </Fade>
      </Col>
    </>
  )
}

export default LiveStockCarousel
