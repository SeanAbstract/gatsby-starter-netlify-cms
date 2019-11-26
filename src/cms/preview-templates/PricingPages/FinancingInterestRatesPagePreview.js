import React from 'react'
import PropTypes from 'prop-types'

import {FinancingInterestRatesPageTemplate} from '../../../templates/pricing-pages/financing-interest-rates'

const FinancingInterestRatesPagePreview = ({entry, widgetFor}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <FinancingInterestRatesPageTemplate
      content={widgetFor('body')}
      description={data.description || []}
      title={data.title || []}
      downloadNow={data.downloadNow || {}}
      featuredImage={data.featuredimage}
      footerLinks={data.footerLinks || {}}
    />
  )
}

FinancingInterestRatesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FinancingInterestRatesPagePreview
