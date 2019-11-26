import React from 'react'
import PropTypes from 'prop-types'

import {USStockOptionsPageTemplate} from '../../../templates/pricing-pages/us-stock-options'


const USStockOptionsPagePreview = ({entry, widgetFor}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <USStockOptionsPageTemplate
      content={widgetFor('body')}
      description={data.description || []}
      title={data.title || []}
      downloadNow={data.downloadNow || {}}
      featuredImage={data.featuredimage}
      footerLinks={data.footerLinks || {}}
    />
  )
}

USStockOptionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default USStockOptionsPagePreview
