// @flow
import React from 'react'

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

function StocksCarousel({stocks}: Props) {
  return stocks.map(stock => (
    <div className="mb-5" key={stock.countryCode}>
      <div className="row align-items-center">
        <div className="col-md-2">
          <div
            className="rounded-circle border border-dark d-flex justify-content-center align-items-center border-white"
            style={{height: '55px', width: '55px'}}
          >
            <h5 className="mb-0">{stock.countryCode}</h5>
          </div>
        </div>

        <h3 className="mb-0 mt-1">{stock.country} Stocks</h3>
      </div>
      <div className="row">
        <div className="col-md-2" />
        <div className="d-flex flex-column">
          <small className="font-weight-bold">COMMISSION</small>
          {stock.commission.map(commission => (
            <p className="mb-0">
              <span style={{fontSize: '24px'}}>{commission.price}</span>{' '}
              <small>{commission.text}</small>
            </p>
          ))}
        </div>
      </div>
    </div>
  ))
}

export default StocksCarousel
