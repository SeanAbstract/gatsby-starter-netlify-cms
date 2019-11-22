import React from 'react'
import PropTypes from 'prop-types'

import {IndexPageTemplate} from '../../templates/index-page'

const IndexPagePreview = ({entry, getAsset}) => {
  const data = entry.getIn(['data']).toJS()
  console.log(entry)
  console.log(data)

  return (
    <IndexPageTemplate
      image={data.image}
      firstSection={data.firstSection || {}}
      stockSection={data.stockSection || {}}
      featureSection={data.featureSection || {}}
      blurb={data.blurb || {}}
      realTimeStockSection={data.realTimeStockSection || {}}
      testimonials={data.testimonials || []}
      downloadNow={data.downloadNow || {}}
      geoCountry="us"
      videoName={data.videoName}
      videoNameUS={data.videoNameUS}
      videoNameAU={data.videoNameAU}
      videoNameCN={data.videoNameCN}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
