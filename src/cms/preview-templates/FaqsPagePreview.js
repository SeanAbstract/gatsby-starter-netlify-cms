import React from 'react'
import PropTypes from 'prop-types'

import {FaqsTemplate} from '../../templates/faq-page'

const FaqsPreview = ({entry}) => {
  const data = entry.getIn(['data']).toJS()

  return <FaqsTemplate headerImage={data.headerImage} categories={data.categories || []} />
}

FaqsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FaqsPreview
