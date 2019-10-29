import React from 'react'
import styled from 'styled-components'

function SharedJumbotron({headerImage, title, description, size, secondaryColor}) {
  return (
    <Jumbotron
      className="full-width-image-container d-flex justify-content-center align-items-center flex-column"
      headerImage={headerImage}
    >
      <div
        className={`h-100 w-100 d-flex flex-column justify-content-center align-items-center ${
          size === 'lg' ? 'text-right' : ''
        }`}
        style={{position: 'absolute', background: 'rgba(0,0,0, 0.2)', top: 0, zIndex: 0}}
      >
        <h1 className="big-text">{title}</h1>
        <h3 className={`big-subtitle ${secondaryColor === 'primary' ? 'text-primary' : ''}`}>
          {description}
        </h3>
      </div>
    </Jumbotron>
  )
}

const Jumbotron = styled.div`
  height: ${props => props.size === 'lg' && '70vh'};
  background-image: url(${props =>
    props.headerImage.childImageSharp
      ? props.headerImage.childImageSharp.fluid.src
      : props.headerImage});
`

export default SharedJumbotron
