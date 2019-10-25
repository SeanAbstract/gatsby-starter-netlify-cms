// @flow
import React from 'react'

import PreviewCompatibleImage from '../PreviewCompatibleImage'
import './styles.scss'

type Props = {
  mainText: String,
  subText: String,
  image: any,
}

function DownloadNow({mainText, subText, image}: Props) {
  return (
    <div className="download-now">
      <div className="container">
        <div className="row mx-auto">
          <div className="col-md-5 col-6 ml-auto d-flex flex-column justify-content-center">
            <h1 className="text-primary display-3">{mainText}</h1>
            <h3 className="big-subtitle text-dark">{subText}</h3>
          </div>
          <div className="col-md-4 col-6 mr-auto ">
            <PreviewCompatibleImage imageInfo={image} style={{maxWidth: '230px'}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadNow
