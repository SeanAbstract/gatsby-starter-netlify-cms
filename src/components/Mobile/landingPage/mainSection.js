import React, {useEffect} from 'react'
import styled, {withTheme} from 'styled-components'
import {Jumbotron} from 'reactstrap'

import {MainText, SubText} from '../styled'
import videoSrcURL from '../../../../static/img/Beach-Final.mp4'

function MainSection() {
  useEffect(() => {
    const currentVideo = document.getElementById('mainVideo')

    currentVideo.play()
  })

  return (
    <MainJumbotron primary>
      <ImageContainer>
        {/* <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          imgStyle={{height: '100%'}}
          style={{height: '100%', objectFit: 'cover'}}
        /> */}
        <StyledVideo id="mainVideo" loop width="100%" muted preload src={videoSrcURL}>
          <track kind="captions" />
        </StyledVideo>
        <Overlay />
      </ImageContainer>
      <InnerContainer>
        <BigText>GLOBAL MARKETS</BigText>
        <BigSubText className="text-primary">at your fingertips</BigSubText>
      </InnerContainer>

      {/* <ArrowDownIcon src={arrowDown} alt="arrow_down" /> */}
    </MainJumbotron>
  )
}

const BigText = styled(MainText)`
  font-size: 5.5rem;
  line-height: 4.25rem;
`

const BigSubText = styled(SubText)`
  font-size: 5.75rem;
  display: inline-flex;
`

const StyledVideo = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`

const MainJumbotron = styled(Jumbotron)`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  background-color: transparent;
  margin-top: 0;
  text-align: center;

  @media (min-width: 1200px) {
    height: 75vh;
  }
`

const ImageContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 0;

  @media (min-width: 1200px) {
    height: 75vh;
  }
`

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const InnerContainer = styled.div`
  text-align: center;
  max-width: 80%;
  padding-bottom: 5rem;
  padding-top: 2.5rem;
`

const ArrowDownIcon = styled.img`
  height: 25px;
  width: 25px;
  object-fit: contain;
`

export default withTheme(MainSection)
