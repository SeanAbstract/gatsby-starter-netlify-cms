import React from 'react'
import PropTypes from 'prop-types'

import {AboutPageTemplate} from '../../templates/about-page'

const AboutPagePreview = ({entry, widgetFor}) => {
  const data = entry.getIn(['data']).toJS()

  console.log(data)

  return (
    <AboutPageTemplate
      mainpitch={data.mainpitch || {}}
      tabs={data.tabs || []}
      headerImage={data.headerImage}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
