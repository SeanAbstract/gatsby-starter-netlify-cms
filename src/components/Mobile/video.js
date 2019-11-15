import React, {useState} from 'react'
import styled from 'styled-components'
import {Button} from 'reactstrap'

function Video({video, id, toggle}: Props) {
  const [paused, setPaused] = useState(true)

  const togglePlay = () => {
    const currentVideo = document.getElementById(id)
    if (paused === true) {
      currentVideo.play()
    } else {
      currentVideo.pause()
    }
    setPaused(!paused)
  }

  return (
    <div>
      <video id={id} loop width="100%" muted preload src={video}>
        <track kind="captions" />
      </video>
      <StyledButton className="d-flex justify-content-center align-items-center" onClick={toggle}>
        <span />
      </StyledButton>
    </div>
  )
}

const StyledButton = styled(Button)`
  position: absolute;
  top: calc(50% - 2.5rem);
  left: calc(50% - 2.5rem);
  background: transparent;
  border-radius: 50%;
  border: 2px solid white;
  width: 5rem;
  height: 5rem;

  span {
    width: 2rem;
    height: 2rem;
    background: no-repeat 50%/100% 100%;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e");
  }
`

export default Video
