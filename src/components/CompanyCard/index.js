// @flow
import React from 'react'

import PreviewCompatibleImage from '../PreviewCompatibleImage'

type Props = {
  brandLogo: any,
  brandDescription: string,
}

function CompanyCard(props: Props) {
  return (
    <div className="col-md-3 text-left">
      <PreviewCompatibleImage imageInfo={props.brandLogo} alt="Brand Logo" />
      <p>{props.brandDescription}</p>
    </div>
  )
}

export default CompanyCard
