import React from 'react'
import PropTypes from 'prop-types'

import {RiskPageTemplate} from '../../templates/risk-disclosure'

const RiskPagePreview = ({entry, widgetFor}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <RiskPageTemplate
      content={widgetFor('body')}
      description={data.description || []}
      title={data.title || []}
      downloadNow={data.downloadNow || {}}
      featuredImage={data.featuredimage}
      footerLinks={data.footerLinks || {}}
    />
  )
}

RiskPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RiskPagePreview
