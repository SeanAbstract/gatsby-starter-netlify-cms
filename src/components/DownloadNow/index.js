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
          <div className="col-md-5 col-6 ml-auto d-flex flex-column justify-content-center text-container">
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
            <p>
              <br />
              (English app available mid/late 2020)
            </p>
          </div>
          <div className="col-md-4 col-6 mr-auto">
            <VizSensor
              partialVisibility
              onChange={isVisible => {
                console.log(isVisible)
                if (isVisible) {
                  videoRef.current.play()
                }
              }}
            >
              <StyledVideo
                src={phoneVideo}
                poster={phone}
                id="downloadNowPhone"
                ref={videoRef}
                // className="d-none d-md-flex"
              >
                <track />
              </StyledVideo>
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
    width: 100px;
  }
`

const StyledVideo = styled.video`
  max-width: 80%;
  margin-bottom: 50px;

  @media (max-width: 550px) {
    max-width: 80%;
    height: 250px;
    object-position: top;
    object-fit: contain;
  }
`

export default DownloadNow
