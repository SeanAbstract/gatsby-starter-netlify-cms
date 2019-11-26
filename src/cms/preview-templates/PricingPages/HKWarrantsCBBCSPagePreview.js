import React from 'react'
import PropTypes from 'prop-types'

import {HKWarrantsCBBCSPageTemplate} from '../../../templates/pricing-pages/us-stock-options'

const HKWarrantsCBBCSPagePreview = ({entry, widgetFor}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <HKWarrantsCBBCSPageTemplate
      content={widgetFor('body')}
      description={data.description || []}
      title={data.title || []}
      downloadNow={data.downloadNow || {}}
      featuredImage={data.featuredimage}
      footerLinks={data.footerLinks || {}}
    />
  )
}

HKWarrantsCBBCSPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HKWarrantsCBBCSPagePreview
