import React from 'react'

function SharedJumbotron({headerImage, title, description, size}) {
  return (
    <div
      className="full-width-image-container d-flex justify-content-center align-items-center flex-column"
      style={{
        backgroundImage: `url(${
          headerImage.childImageSharp ? headerImage.childImageSharp.fluid.src : headerImage
        })`,
        height: size === 'lg' && '70vh',
      }}
    >
      <div
        className={`h-100 w-100 d-flex flex-column justify-content-center align-items-center ${
          size === 'lg' ? 'text-right' : ''
        }`}
        style={{position: 'absolute', background: 'rgba(0,0,0, 0.2)', top: 0, zIndex: 0}}
      >
        <h1 className="big-text">{title}</h1>
        <h3 className="big-subtitle">{description}</h3>
      </div>
    </div>
  )
}

export default SharedJumbotron
