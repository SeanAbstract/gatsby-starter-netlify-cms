import styled from 'styled-components'
import {Jumbotron, Button} from 'reactstrap'

/**
 * Jumbotron
 */

export const StyledJumbotron = styled(Jumbotron)`
  display: flex;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  background-color: ${props => props.theme.primary};
`

export const MainJumbotron = styled(Jumbotron)`
  display: flex;
  justify-content: center;
  padding-top: 7.5rem;
  padding-bottom: 5rem;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;
  background-color: hsl(0, 0%, 20%, 40%);
  margin-top: 0;
  height: 40vh;

  @media (min-width: 768px) {
    height: 50vh;
  }
`

/**
 * Text
 */
export const MainText = styled.h1`
  color: ${props => props.color === 'primary' && props.theme.primary};
  margin-bottom: 0;
  /* font-size: 4rem; */
`

export const SubText = styled.h2`
  color: ${props => (props.color === 'border' ? props.theme.border : props.theme.primary)};
  font-size: 4rem;
`

/**
 * Button
 */

export const RoundButton = styled(Button)`
  border-radius: 20px;
  border-width: 2px;
  font-size: 14px;
  color: ${props => props.theme.primary};
  border-color: ${props => props.theme.primary};
  line-height: 0.75rem;
`

export const ButtonText = styled.p`
  line-height: 0.9rem;
  font-size: 0.75rem;
  padding-top: 3px;
  font-weight: normal;
  margin-bottom: 0;
`

/**
 * Input
 */

/**
 * Timeline Icon
 */

export const TimelineIcon = styled.div`
  width: 2px;
  height: 2rem;
  background-color: #aaaaaa;
  margin: auto;
  position: relative;
  z-index: 2;

  &:before {
    width: 0px;
    height: 0px;
    border: 5px solid #aaaaaa;
    border-radius: 50%;
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
  }

  &:after {
    width: 0px;
    height: 0px;
    border: 5px solid #aaaaaa;
    border-radius: 50%;
    content: '';
    position: absolute;
    top: calc(100% - 5px);
    left: -4px;
  }

  @media (min-width: 992px) {
    width: 3rem;
    height: 2px;

    &:before {
      left: -5px;
    }

    &:after {
      left: calc(100% - 4px);
      top: -4px;
    }
  }
`

/**
 * Main Image Container
 */

export const ImageContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  height: 40vh;

  @media (min-width: 768px) {
    height: 50vh;
  }
`
