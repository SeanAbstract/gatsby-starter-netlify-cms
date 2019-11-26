import React from 'react'
import PropTypes from 'prop-types'

import {ShanghaiShenzhenStocksPageTemplate} from '../../../templates/pricing-pages/shanghai-shenzhen-stocks'

const ShanghaiShenzhenStocksPagePreview = ({entry, widgetFor}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <ShanghaiShenzhenStocksPageTemplate
      content={widgetFor('body')}
      description={data.description || []}
      title={data.title || []}
      downloadNow={data.downloadNow || {}}
      featuredImage={data.featuredimage}
      footerLinks={data.footerLinks || {}}
    />
  )
}

ShanghaiShenzhenStocksPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ShanghaiShenzhenStocksPagePreview
