// @flow
import React from 'react'
import styled from 'styled-components'
import {Row, Col} from 'reactstrap'

type Props = {
  financingRate: string,
  currency: string,
  stockName: string,
  platformUsageFee: string,
  platformUsageFeeType: string,
  packageType: string,
  commission: [
    {
      price: string,
      text: string,
    }
  ],
}

function StockSection({
  currency,
  stockName,
  commission,
  financingRate,
  platformUsageFee,
  platformUsageFeeType,
  packageType,
}: Props) {
  return (
    <Row id={stockName} style={{color: 'white'}} className="w-100 justify-content-center">
      <Col xs={2} md={2} lg={1} className="rounded-circle mr-3">
        <CircleContainer>
          <CurrencyText className="mb-0">{currency}$</CurrencyText>
        </CircleContainer>
      </Col>
      <Col xs={6} md={8} className="mt-md-3">
        <StockType>{stockName}</StockType>

        <CommissionText style={{transform: 'uppercase'}} className="mb-2">
          {packageType}
        </CommissionText>

        {commission.map((comm, ndx) => (
          <Row className="align-items-end mb-2 justify-content-between" key={comm.price}>
            <Col md={10} lg={10} className="">
              <AmountText className="mb-1">
                {comm.price} <br className="d-md-none" />
                <StyledSmall>{comm.text}</StyledSmall>
              </AmountText>

              {ndx + 1 === commission.length && (
                <>
                  <AmountText className="mb-1 no-mobile">
                    {platformUsageFee} <StyledSmall>{platformUsageFeeType} </StyledSmall>{' '}
                  </AmountText>
                  <AmountText className="mb-1 no-mobile">
                    {financingRate} <StyledSmall>financing interest rate (min.)</StyledSmall>
                  </AmountText>
                </>
              )}
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  )
}

const CurrencyText = styled.p`
  margin-top: 5.4px;
  font-size: 22px;
`

const StockType = styled.h4`
  font-weight: 500;
  font-size: 32px;

  @media (max-width: 550px) {
    padding-top: 20px;
  }
`

const CommissionText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`

const AmountText = styled.h3`
  font-weight: normal;
  font-size: 32px;

  @media (max-width: 426px) {
    &.no-mobile {
      display: none;
    }
  }
`

const StyledSmall = styled.small`
  font-size: 12px;
`

const CircleContainer = styled.div`
  border: 2px solid white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  padding-top: 2px;
`

export default StockSection
