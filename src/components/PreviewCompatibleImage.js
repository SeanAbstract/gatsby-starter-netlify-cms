import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({imageInfo, alt, style}) => {
  const {childImageSharp, image} = imageInfo

  if (!!image && !!image.childImageSharp) {
    return <Img style={style} fluid={image.childImageSharp.fluid} alt={alt} className="img-fluid" />
  }

  if (childImageSharp) {
    return <Img style={style} fluid={childImageSharp.fluid} alt={alt} className="img-fluid" />
  }

  if (!!image && typeof image === 'string') {
    return <img style={style} src={image} alt={alt} className="img-fluid" />
  }

  if (typeof imageInfo === 'string') {
    console.log('- - - - - - -')
    console.log(image)
    console.log('- - - - - - -')
    return <img style={style} src={image} alt={alt} className="img-fluid" />
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
