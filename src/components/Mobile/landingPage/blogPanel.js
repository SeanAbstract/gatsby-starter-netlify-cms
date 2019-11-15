// @flow

import React from 'react'
import styled from 'styled-components'
import {Container, Button, Col} from 'reactstrap'
import Img from 'gatsby-image'
// import arrowRight from '../../images'
type Props = {
  title: string,
  desc: string,
  img: string,
}

function BlogPanel({title, desc, img}: Props) {
  return (
    <StyledCol sm={12} md={4}>
      <OuterContainer>
        <ImgContainer>
          {/* <Img
            fluid={img && img.placeholderImage.childImageSharp.fluid}
            imgStyle={{height: '100%'}}
            style={{height: '100%', objectFit: 'cover'}}
          /> */}
        </ImgContainer>
        <InnerContainer>
          <Title className="mb-0">{title}</Title>
          <small className="mb-3" style={{color: '#444444'}}>
            {desc}
          </small>
          <div>
            <RoundButton outline size="lg">
              <ButtonText className="mb-0">Get Started</ButtonText>
            </RoundButton>
          </div>
          <div className="mt-5">
            <ArrowRight style={{fontSize: '24px'}}>></ArrowRight>
          </div>
        </InnerContainer>
      </OuterContainer>
    </StyledCol>
  )
}

const InnerContainer = styled(Container)`
  height: 100%;
  width: calc(100% - 3rem);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem 0;

  * {
    z-index: 2;
  }

  @media (max-width: 426px) {
    border-bottom: 1px solid #444444;
    margin: 0 1.5rem;
    padding: 0;
  }
`

const Title = styled.h5`
  font-weight: 400;
  transition: none;
`

const RoundButton = styled(Button)`
  border-radius: 20px;
  border-color: white;
  border-width: 1px;
  font-size: 14px;
  color: white;
  line-height: 0.75rem;
`

const ButtonText = styled.p`
  line-height: 0.75rem;
  font-size: 0.75rem;
  margin-top: 3.5px;
  font-weight: 300;
  padding: 0 0.75rem;
`

const ArrowRight = styled.p`
  color: ${props => props.theme.primary};
`

const ImgContainer = styled.div`
  width: 100%;
  height: 40vh;
  position: absolute;
  opacity: 0;
  transition: 0.3s;

  @media (max-width: 426px) {
    height: 25vh;
  }
`

const StyledCol = styled(Col)`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-left: 0.5px solid #aaaaaa;

  :last-child {
    border-right: 0.5px solid #aaaaaa;
  }

  :hover {
    border: none;

    + div {
      border-left: none;
    }
  }

  @media (max-width: 426px) {
    border: none !important;
  }
`

const OuterContainer = styled.div`
  height: 40vh;
  color: #006fbb;
  transition: 0.2s;

  :hover {
    color: white;
    margin-top: -2rem;
    box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.17);

    ${ImgContainer} {
      opacity: 1;
    }

    ${RoundButton} {
      display: block;
    }

    small {
      color: white !important;
    }
  }

  @media (max-width: 426px) {
    height: 25vh;
  }
`

export default BlogPanel
