/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React, {useState} from 'react'
import {Carousel, CarouselItem, CarouselControl, Modal, ModalBody, ModalHeader} from 'reactstrap'

import playButton from '../../../static/img/play_button.svg'
import testimonialImage from '../../../static/img/smile-face-7.jpg'
import testimonialImage2 from '../../../static/img/smile-face-8.jpg'
import video from '../../img/SPIN-700x1080_open-account.mp4'
import testimony from '../../img/testimonial-1.mp4'
import testimony2 from '../../img/testimonial-2.mp4'
import testimony3 from '../../img/testimonial-3.mp4'

type Props = {
  testimonials: Array<{
    customerName: string,
    customerPosition: string,
    backgroundImage: string,
    videoUrl: string,
  }>,
}

const testimonyVideos = [testimony, testimony3, testimony2]

const TestimonyCarousel = ({testimonials}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [modal, setModal] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(testimonyVideos[0])

  const toggle = () => setModal(!modal)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const slides = testimonials.map((testimonial, ndx) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={testimonial.customerName}
      style={{
        backgroundImage: `url(${
          testimonial.backgroundImage.childImageSharp
            ? testimonial.backgroundImage.childImageSharp.fluid.src
            : testimonial.backgroundImage
        })`,
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center h-100"
        style={{
          backgroundImage: `url(${
            testimonial.backgroundImage.childImageSharp
              ? testimonial.backgroundImage.childImageSharp.fluid.src
              : testimonial.backgroundImage
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="col-md-2 col-1" />
        <div className="col-md-5 mr-auto col-sm-7 col-8">
          <h1 className="display-2 mb-3">WHAT OUR CUSTOMERS ARE SAYING</h1>
          <h3 className="big-subtitle" style={{fontSize: '72px', color: 'black'}}>
            {testimonial.customerName}
          </h3>
          <h5 className="text-white" style={{textTransform: 'uppercase', fontSize: '14px'}}>
            {testimonial.customerPosition}
          </h5>
          <div
            className="border border-white rounded-circle d-flex justify-content-center align-items-center"
            style={{height: '65px', width: '65px'}}
            onClick={() => {
              setModal(true)
              setCurrentVideo(testimonial.video.publicURL)
            }}
          >
            <img src={playButton} alt="Play Button" className="img-fluid" />
          </div>
        </div>
      </div>
    </CarouselItem>
  ))

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        style={{minHeight: '40vh'}}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      {/* Modal Video */}
      <Modal isOpen={modal} size="lg" toggle={toggle}>
        <ModalHeader toggle={toggle} />
        <ModalBody className="h-100">
          <video controls autoPlay style={{objectFit: 'cover'}}>
            <source src={currentVideo} type="video/mp4" />
          </video>
        </ModalBody>
      </Modal>
    </>
  )
}

export default TestimonyCarousel
