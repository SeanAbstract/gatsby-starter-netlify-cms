import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({imageInfo, alt, style, className}) => {
  const {childImageSharp, image} = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        style={style}
        fluid={image.childImageSharp.fluid}
        alt={alt}
        className={`img-fluid ${className}`}
      />
    )
  }

  if (childImageSharp) {
    return (
      <Img
        style={style}
        fluid={childImageSharp.fluid}
        alt={alt}
        className={`img-fluid ${className}`}
      />
    )
  }

  if (!!image && typeof image === 'string') {
    return <img style={style} src={image} alt={alt} className={`img-fluid ${className}`} />
  }

  if (typeof imageInfo === 'string') {
    console.log('- - - - - - -')
    console.log(imageInfo)
    console.log('- - - - - - -')
    return <img style={style} src={imageInfo} alt={alt} className={`img-fluid ${className}`} />
  }

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
  alt: PropTypes.string,
}

export default PreviewCompatibleImage
