import React from 'react'
import PropTypes from 'prop-types'

import {PricePageTemplate} from '../../templates/price-page'

const FaqsPreview = ({entry}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <PricePageTemplate
      jumbotron={data.jumbotron || {}}
      mainPitch={data.mainPitch}
      lowCommissionPackage={data.lowCommissionPackage || {}}
      lowInterestRatePackage={data.lowInterestRatePackage || {}}
      downloadNow={data.downloadNow || {}}
      footerLinks={data.footerLinks || {}}
    />
  )
}

FaqsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FaqsPreview
