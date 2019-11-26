import React from 'react'
import PropTypes from 'prop-types'

import {HKStockOptionsPageTemplate} from '../../../templates/pricing-pages/hk-stock-options'

const HKStockOptionsPagePreview = ({entry, widgetFor}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <HKStockOptionsPageTemplate
      content={widgetFor('body')}
      description={data.description || []}
      title={data.title || []}
      downloadNow={data.downloadNow || {}}
      featuredImage={data.featuredimage}
      footerLinks={data.footerLinks || {}}
    />
  )
}

HKStockOptionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HKStockOptionsPagePreview
