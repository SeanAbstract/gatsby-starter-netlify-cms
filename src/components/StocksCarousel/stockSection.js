import React from 'react'
import styled from 'styled-components'
import {Row, Col} from 'reactstrap'

function StockSection({
  currency,
  stockName,
  commissionAmt,
  commissionDesc,
  interestAmt,
  interestDesc,
}: Props) {
  return (
    <Row id={stockName} style={{color: 'white'}} className="w-100 justify-content-center">
      <Col xs={2} md={2} lg={1} className="rounded-circle mr-3">
        <CircleContainer>
          <CurrencyText className="mb-0">{currency}$</CurrencyText>
        </CircleContainer>
      </Col>
      <Col xs={6} md={7} className="mt-md-3">
        <StockType>{stockName}</StockType>

        <CommissionText>COMMISSION</CommissionText>

        <Row className="align-items-end mb-2 justify-content-between ">
          <Col md={10} lg={10} className="mr-3">
            <AmountText className="mb-0">
              {commissionAmt} <br className="d-md-none" />
              <StyledSmall>{commissionDesc}</StyledSmall>
            </AmountText>
          </Col>
        </Row>

        <Row className="align-items-end">
          <Col md={12} lg={10} className="mr-2">
            <AmountText className="mb-0">
              {interestAmt} <br className="d-md-none" /> <StyledSmall>{interestDesc}</StyledSmall>
            </AmountText>
          </Col>
        </Row>
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
`

const CommissionText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`

const AmountText = styled.h3`
  font-weight: normal;
  font-size: 32px;
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
