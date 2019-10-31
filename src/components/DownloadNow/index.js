// @flow
import React, {useEffect} from 'react'

import './styles.scss'

import googlePlayStore from '../../img/google-play.jpg'
import appleIcon from '../../img/apple-store.jpg'
import qrCode from '../../img/qr-code.jpg'
import phoneVideo from '../../img/SPIN-700x1080_open-account.mp4'
import phone from '../../../static/img/snowball-phone.png'

type Props = {
  mainText: String,
  subText: String,
  image: any,
}

function DownloadNow({mainText, subText, image}: Props) {
  function changeZIndex() {
    console.log(document.documentElement.scrollTop)

    if (
      (document.body.scrollTop > 8600 && document.body.scrollTop < 8800) ||
      (document.documentElement.scrollTop > 8600 && document.documentElement.scrollTop < 8800) ||
      (document.body.scrollTop > 150 && document.body.scrollTop < 750) ||
      (document.documentElement.scrollTop > 150 && document.documentElement.scrollTop < 750) ||
      (document.documentElement.scrollTop > 3200 && document.documentElement.scrollTop < 3500)
    ) {
      const currentVideo = document.getElementById('downloadNowPhone')
      currentVideo.play()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeZIndex)

    return () => {
      window.removeEventListener('scroll', changeZIndex)
    }
  })

  return (
    <div className="download-now">
      <div className="container">
        <div className="row mx-auto">
          <div className="col-md-5 col-6 ml-auto d-flex flex-column justify-content-center">
            <h1 className="text-primary display-3">{mainText}</h1>
            <h3 className="big-subtitle text-dark">{subText}</h3>
            <div className="d-flex mt-3">
              <a href="https://apps.apple.com/cn/app/xy-trade/id1209930465?l=en">
                <img src={googlePlayStore} alt="" style={{maxWidth: '130px'}} className="mr-3" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.snowballfinance.android">
                <img src={appleIcon} alt="" style={{maxWidth: '130px'}} />
              </a>
            </div>
            <img src={qrCode} alt="" style={{maxWidth: '120px'}} className="mt-3" />
          </div>
          <div className="col-md-4 col-6 mr-auto ">
            <video
              src={phoneVideo}
              style={{maxWidth: '300px'}}
              poster={phone}
              id="downloadNowPhone"
            >
              <track />
            </video>
            {/* <PreviewCompatibleImage imageInfo={image} style={{maxWidth: '230px'}} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadNow
