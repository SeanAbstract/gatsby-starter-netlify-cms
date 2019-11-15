import React, {useState} from 'react'
import styled from 'styled-components'
import {Container, Row, Carousel, CarouselItem, CarouselControl, Modal, ModalBody} from 'reactstrap'

import Video from '../video'
import testimony from '../../../img/testimonial-1.mp4'
import testimony2 from '../../../img/testimonial-2.mp4'
import testimony3 from '../../../img/testimonial-3.mp4'

const carouselList = [
  {
    id: 'something',
    src: testimony,
  },
  {
    id: 'something2',
    src: testimony2,
  },
  {
    id: 'something3',
    src: testimony3,
  },
]

function EighthSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [modal, setModal] = useState(false)
  const [video, setVideo] = useState(null)

  const toggle = () => setModal(!modal)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === carouselList.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? carouselList.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const slides = carouselList.map(item => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      // onClick={toggle}
      key={item.src}
    >
      <Video
        video={item.src}
        id={item.id}
        toggle={() => {
          toggle()
          setVideo(item.src)
        }}
      />
    </CarouselItem>
  ))

  return (
    <StyledContainer fluid>
      <Row>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </Row>

      <Modal isOpen={modal} size="lg" toggle={toggle}>
        <ModalBody>
          <video
            id="modalVideo"
            loop
            width="100%"
            muted
            src={video}
            height="91.5%"
            style={{objectFit: 'cover'}}
            autoPlay
          >
            <track kind="captions" />
          </video>
        </ModalBody>
      </Modal>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  display: flex;
  height: 70vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;

  @media (max-width: 426px) {
    padding: 0;
    height: auto;
  }

  @media (min-width: 1024px) {
    height: 90vh;
  }
`

export default EighthSection
