// @flow
import React from 'react'

import PreviewCompatibleImage from '../PreviewCompatibleImage'

type Props = {
  brandLogo: any,
  brandDescription: string,
}

function CompanyCard(props: Props) {
  return (
    <div className="col-md-4 col-lg-3 col-12 text-left mb-5">
      <div style={{width: '150px'}}>
        <PreviewCompatibleImage
          imageInfo={props.brandLogo}
          alt="Brand Logo"
          style={{objectFit: 'contain', height: '40px'}}
          className="mb-3"
        />
      </div>

      <p style={{fontSize: '14px'}}>{props.brandDescription}</p>
    </div>
  )
}

export default CompanyCard
