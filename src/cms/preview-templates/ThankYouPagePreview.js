import React from 'react'
import PropTypes from 'prop-types'

import {ThankYouPageTemplate} from '../../templates/thank-you'

const ThankYouPagePreview = ({entry, widgetFor}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <ThankYouPageTemplate
      content={widgetFor('body')}
      description={data.description || []}
      title={data.title || []}
      downloadNow={data.downloadNow || {}}
      featuredImage={data.featuredimage}
      footerLinks={data.footerLinks || {}}
    />
  )
}

ThankYouPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TermsPagePreview
