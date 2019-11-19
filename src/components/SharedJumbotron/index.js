import React from 'react'
import styled, {css} from 'styled-components'

function SharedJumbotron({headerImage, title, description, size, secondaryColor, blur}) {
  return (
    <Jumbotron
      className="full-width-image-container d-flex justify-content-center align-items-center flex-column"
      headerImage={headerImage}
      blur={blur}
    >
      <div
        className={`h-100 w-100 d-flex flex-column justify-content-center align-items-center ${
          size === 'lg' ? 'text-right' : ''
        }`}
        style={{
          position: 'absolute',
          background: 'rgba(0,0,0, 0.2)',
          top: 0,
          zIndex: 0,
        }}
      >
        <h1 className="display-3" style={{marginBottom: '-5px'}}>
          {title}
        </h1>
        <h3 className={`big-subtitle ${secondaryColor === 'primary' ? 'text-primary' : ''}`}>
          {description}
        </h3>
      </div>
    </Jumbotron>
  )
}

const Jumbotron = styled.div`
  height: ${props => props.size === 'lg' && '70vh'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props =>
      props.headerImage.childImageSharp
        ? props.headerImage.childImageSharp.fluid.src
        : props.headerImage});
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    ${props =>
      props.blur &&
      css`
        filter: blur(2px);
      `}
  }
`

export default SharedJumbotron
