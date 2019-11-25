import React from 'react'
import PropTypes from 'prop-types'

import {ContactPageTemplate} from '../../templates/contact-page'

const AboutPagePreview = ({entry}) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <ContactPageTemplate
      jumbotron={data.jumbotron}
      informationSection={data.informationSection || {}}
      socialMedia={data.socialMedia || {}}
      usingCMS
      downloadNow={data.downloadNow || {}}
      footerLinks={data.footerLinks || {}}
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
