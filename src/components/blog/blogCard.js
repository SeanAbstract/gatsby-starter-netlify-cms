/* eslint-disable import/no-dynamic-require, global-require */
// @flow
import React from 'react'
import styled from 'styled-components'
import {Card, CardBody} from 'reactstrap'

type Props = {
  type: string,
  title: string,
}

function BlogCard({type, title}: Props) {
  return (
    <StyledCard className="mb-3">
      <StyledCardBody>
        <Type>{type}</Type>
        <Title>{title}</Title>
      </StyledCardBody>
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  border: none !important;
  border-radius: 0;
  line-height: 1;
  background-color: grey;
  /* height: 175px; */
`

const StyledCardBody = styled(CardBody)`
  text-align: left;
  line-height: 1;
`

const Type = styled.p`
  margin-bottom: 0.5rem;
  color: white;
`

const Title = styled.h5`
  color: white;
`

export default BlogCard
