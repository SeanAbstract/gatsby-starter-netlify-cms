import React from 'react'
import PropTypes from 'prop-types'

import {AboutPageTemplate} from '../../templates/about-page'

const AboutPagePreview = ({entry, widgetFor}) => {
  const entryTabs = entry.getIn(['data', 'tabs'])
  const tabs = entryTabs ? entryTabs.toJS() : []

  return (
    <AboutPageTemplate
      mainpitch={{
        title: entry.getIn(['data', 'mainpitch', 'title']),
        description: entry.getIn(['data', 'mainpitch', 'description']),
        secondDescription: entry.getIn(['data', 'mainpitch', 'secondDescription']),
      }}
      tabs={tabs}
      headerImage={entry.getIn(['data', 'headerImage'])}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
