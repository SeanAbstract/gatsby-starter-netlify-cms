import React from 'react'
import PropTypes from 'prop-types'

import {AboutPageTemplate} from '../../templates/about-page'

const AboutPagePreview = ({entry}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <AboutPageTemplate
      mainpitch={data.mainpitch || {}}
      tabs={data.tabs || []}
      headerImage={data.headerImage}
      historyCards={data.historyCards || []}
      investors={data.investors || []}
      partners={data.partners || []}
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
