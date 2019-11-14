// @flow
import React, {useRef} from 'react'
import VizSensor from 'react-visibility-sensor'
import './styles.scss'
import styled from 'styled-components'

import googlePlayStore from '../../img/google-play.jpg'
import appleIcon from '../../img/apple-store.jpg'
import qrCode from '../../img/qr-code.jpg'
import phoneVideo from '../../../static/img/snowball-footer-vid.mp4'
import phone from '../../../static/img/snowball-phone.png'

type Props = {
  mainText: String,
  subText: String,
  image: any,
}

function DownloadNow({mainText, subText, image}: Props) {
  // const [shouldAnimate, setShouldAnimate] = useState(true)
  const videoRef = useRef(null)
  return (
    <div className="download-now" onScrollCapture>
      <div className="container">
        <div className="row mx-auto">
          <div className="col-md-5 col-6 ml-auto d-flex flex-column justify-content-center">
            <h1 className="text-primary display-3">{mainText}</h1>
            <h3 className="big-subtitle text-dark">{subText}</h3>
            <div className="d-flex mt-3">
              <a href="https://play.google.com/store/apps/details?id=com.snowballfinance.android">
                <AppButtons src={googlePlayStore} alt="" className="mr-3" />
              </a>
              <a href="https://apps.apple.com/cn/app/xy-trade/id1209930465?l=en">
                <AppButtons src={appleIcon} alt="" />
              </a>
            </div>
            <img
              src={qrCode}
              alt=""
              style={{maxWidth: '120px'}}
              className="mt-3 d-none d-md-block"
            />
          </div>
          <div className="col-md-4 col-6 mr-auto ">
            <VizSensor
              partialVisibility
              onChange={isVisible => {
                console.log(isVisible)
                if (isVisible) {
                  videoRef.current.play()
                }
              }}
            >
              <video
                src={phoneVideo}
                style={{maxWidth: '250px', marginBottom: '35px'}}
                poster={phone}
                id="downloadNowPhone"
                ref={videoRef}
              >
                <track />
              </video>
            </VizSensor>
          </div>
        </div>
      </div>
    </div>
  )
}

const AppButtons = styled.img`
  width: 120px;

  @media (max-width: 565px) {
    width: 80px;
  }
`

export default DownloadNow
