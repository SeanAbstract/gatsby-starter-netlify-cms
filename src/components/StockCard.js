/* eslint-disable import/no-dynamic-require */
// @flow
import React from 'react'
import styled from 'styled-components'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Row,
  Container,
  Col,
  UncontrolledCarousel,
} from 'reactstrap'

type Props = {
  icon: string,
  stockPrice: string,
  stockPercentage: string,
  companyName: string,
  bgColor: string,
  stockCode: String,
}
const items = [
  {
    src:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    key: '1',
  },
  {
    src:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    key: '2',
  },
  {
    src:
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    key: '3',
  },
]
const StockCard = (props: Props) => (
  <StyledCard>
    <Row noGutters>
      <Col md={12} xs={5}>
        <ImgContainer
          style={{backgroundColor: props.bgColor}}
          className="d-flex justify-content-center align-items-center img-container"
        >
          <UncontrolledCarousel items={items} indicators={false} controls={false} />
          {/* <CardImg
            width="100%"
            src={require(`../img/social/${props.icon}.svg`)}
            alt="Card image cap"
            style={{height: '50px', width: '50px', objectFit: 'contain'}}
          /> */}
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
  </StyledCard>
)

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
