import React from 'react'
import styled from 'styled-components'
import {Container} from 'reactstrap'

import BlogPanel from '../../BlogRoll'

function SixthSection() {
  return (
    <StyledContainer className="blog-roll-container text-light">
      <BlogPanel />
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)``

export default SixthSection
