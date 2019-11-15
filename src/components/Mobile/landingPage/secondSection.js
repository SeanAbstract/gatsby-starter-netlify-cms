import React from 'react'
import styled from 'styled-components'
import {Container, Button, Row, Col} from 'reactstrap'
import Fade from 'react-reveal/Fade'

export default function SecondSection() {
  return (
    <OuterContainer className="d-flex justify-content-center align-items-center">
      <Row className="justify-content-center">
        <Col md={5} lg={4}>
          <Fade bottom>
            <div className="mb-4">
              <TitleWord>FAST</TitleWord>
              <TitleWord>SECURE</TitleWord>
              <TitleWord>TRUSTED</TitleWord>
            </div>
            <div>
              <Paragraph className="text-muted">
                Fast and secure access to global markets with our online platform that allows you to
                buy and sell securities in Hong Kong, China and the US. Try Snowball Securities
                today – a trusted member of the Snowball Group.
              </Paragraph>
              <RoundButton color="primary" outline>
                <ButtonText>Try Snowball Securities today</ButtonText>
              </RoundButton>
            </div>
          </Fade>
        </Col>
      </Row>
    </OuterContainer>
  )
}

const OuterContainer = styled(Container)`
  height: 100vh;

  padding-right: 1.3rem;
  padding-left: 1.3rem;

  @media (min-width: 425px) {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }

  @media (min-width: 1024px) {
    height: 80vh;
  }
`

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 300;
`

const TitleWord = styled.h1`
  margin-bottom: -12px;
  font-size: 3.5rem;
  color: ${props => props.theme.primary};
  line-height: 3.5rem;

  @media (min-width: 425px) {
    line-height: 3.5rem;
  }

  @media (min-width: 576px) {
    font-size: 5rem;
    line-height: 4.5rem;
  }

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`

const RoundButton = styled(Button)`
  border-radius: 20px;
  border-width: 2px;
  font-size: 14px;
  color: ${props => props.theme.primary};
  border-color: ${props => props.theme.primary};
  line-height: 0.75rem;
`

const ButtonText = styled.p`
  line-height: 0.9rem;
  font-size: 0.75rem;
  padding-top: 3px;
  font-weight: normal;
  margin-bottom: 0;
`
