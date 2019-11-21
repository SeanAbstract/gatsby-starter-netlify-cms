/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React, {useState} from 'react'
import {Carousel, CarouselItem, CarouselControl, Modal, ModalBody, ModalHeader} from 'reactstrap'
import {Link} from 'gatsby'
import './styles.scss'

import playButton from '../../../static/img/play_button.svg'
import testimonialImage from '../../../static/img/smile-face-7.jpg'
import testimonialImage2 from '../../../static/img/smile-face-8.jpg'
import video from '../../img/SPIN-700x1080_open-account.mp4'
import testimony from '../../img/testimonial-1.mp4'
import testimony2 from '../../img/testimonial-2.mp4'
import testimony3 from '../../img/testimonial-3.mp4'

const items = [
  {
    src: testimonialImage,
  },
  {
    src: testimonialImage2,
  },
]

type Props = {
  section: Object<{
    sections: Array,
    customerPosition: string,
    backgroundImage: string,
    videoUrl: string,
  }>,
}

const testimonyVideos = [testimony, testimony3, testimony2]

const FeatureCarousel = ({section}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [modal, setModal] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(testimonyVideos[0])

  const toggle = () => setModal(!modal)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === section.sections.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? section.sections.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }
  const slides = section.sections.map((item, ndx) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={ndx}
    >
      <div className="container">
        <div className="d-flex flex-column h-100">
            <div className="info-phone-container">
              <div className="phone-frame" />
              <div className="phone-display" />
            </div>
            <h5 className="mb-0 w-100" style={{fontSize: '28px', textAlign: 'left'}}>
              {item.subText}
            </h5>
            <p className="dark-grey font-size-18">{item.description}</p>
            <Link to="/how-it-works">
              <button className="btn btn-outline-primary rounded-pill px-4" type="button">
                {section.buttonText}
              </button>
            </Link>
        </div>
      </div>
    </CarouselItem>
  ))

  return (
    <>
      <div className="container" style={{marginTop: '40px'}}>
        <h1 className="text-primary display-2 mb-3">Make Informed Decisions</h1>
      </div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        style={{minHeight: '40vh'}}
        className="on-mobile"
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </>
  )
}

export default FeatureCarousel
