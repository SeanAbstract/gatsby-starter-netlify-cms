import React from 'react'
import PropTypes from 'prop-types'

import {HowItWorksTemplate} from '../../templates/how-it-works-page'

const HowItWorksPreview = ({entry}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <HowItWorksTemplate
      jumbotron={data.jumbotron || {}}
      sections={data.sections || []}
      downloadNow={data.downloadNow}
    />
  )
}

HowItWorksPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HowItWorksPreview
