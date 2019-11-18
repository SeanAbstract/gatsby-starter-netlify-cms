import React from 'react'
import PropTypes from 'prop-types'

import {FaqPageTemplate} from '../../templates/faq-page'

const FaqsPreview = ({entry}) => {
  const data = entry.getIn(['data']).toJS()

  return <FaqPageTemplate headerImage={data.headerImage} questions={data.questions || []} />
}

FaqsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FaqsPreview
