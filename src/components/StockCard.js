/* eslint-disable import/no-dynamic-require */
// @flow
import React from 'react'
import styled from 'styled-components'
import {Card, CardImg, CardBody, CardTitle, Row, Container, Col} from 'reactstrap'

type Props = {
  icon: string,
  stockPrice: string,
  stockPercentage: string,
  companyName: string,
  bgColor: string,
  stockCode: String,
}

const StockCard = (props: Props) => (
  <Card>
    <Row noGutters>
      <Col md={12} xs={5}>
        <ImgContainer
          style={{backgroundColor: props.bgColor}}
          className="d-flex justify-content-center align-items-center"
        >
          <CardImg
            width="100%"
            src={require(`../img/social/${props.icon}.svg`)}
            alt="Card image cap"
            style={{height: '50px', width: '50px', objectFit: 'contain'}}
          />
        </ImgContainer>
      </Col>
      <Col md={12} xs={7}>
        <StyledCardBody>
          <Container>
            <Row className="justify-content-between">
              <CardTitle>{props.stockCode}</CardTitle>
              <div className="d-flex flex-column align-items-start">
                <StockPrice className="mb-1">{props.stockPrice}</StockPrice>
                <StockPercentage>{props.stockPercentage}</StockPercentage>
              </div>
            </Row>
            <Row>
              <small className="text-muted">{props.companyName}</small>
            </Row>
          </Container>
        </StyledCardBody>
      </Col>
    </Row>
  </Card>
)

const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: 225px;
  }
`

const StyledCardBody = styled(CardBody)`
  padding: 1rem 0.75rem 0.15rem;

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
