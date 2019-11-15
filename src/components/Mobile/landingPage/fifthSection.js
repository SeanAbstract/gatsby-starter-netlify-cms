import React from 'react'
import styled from 'styled-components'
import {Container} from 'reactstrap'

function FifthSection() {
  return (
    <OuterContainer>
      <InnerContainer>
        <MainText>GET AHEAD</MainText>
        <SubText>on your terms</SubText>
      </InnerContainer>
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  height: 30vh;
  background-color: #006fbb;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
`

const MainText = styled.h1`
  margin-bottom: 0;
  font-size: 4rem;
  letter-spacing: 1px;
`

const SubText = styled.h2`
  color: ${props => props.theme.primary};
  font-size: 4.5rem;
  color: #9cd0f3;
  margin-top: -5px;
`

export default FifthSection
