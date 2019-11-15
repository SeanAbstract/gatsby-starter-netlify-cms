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
              <TitleWord className="text-primary display-2">FAST</TitleWord>
              <TitleWord className="text-primary display-2">SECURE</TitleWord>
              <TitleWord className="text-primary display-2">TRUSTED</TitleWord>
            </div>
            <div>
              <p className="text-muted">
                Fast and secure access to global markets with our online platform that allows you to
                buy and sell securities in Hong Kong, China and the US. Try Snowball Securities
                today – a trusted member of the Snowball Group.
              </p>
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
  background-color: white;
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

const TitleWord = styled.h1``

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
