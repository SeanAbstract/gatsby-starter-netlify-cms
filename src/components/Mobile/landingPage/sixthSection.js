import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col} from 'reactstrap'
import {useStaticQuery, graphql} from 'gatsby'

import BlogPanel from './blogPanel'

const blogList = [
  {
    title: 'Low commission/margin rate',
    desc: 'minimum comm./trade: 0 for HK, US$0.99 for US',
  },
  {
    title: 'Low commission/margin rate',
    desc: 'minimum comm./trade: 0 for HK, US$0.99 for US',
  },
  {
    title: 'Low commission/margin rate',
    desc: 'minimum comm./trade: 0 for HK, US$0.99 for US',
  },
]

function SixthSection() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "stock.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledContainer>
      <Row noGutters className="w-100">
        <Col md={10} className="mx-auto">
          <Row className="w-100">
            {blogList.map(blog => (
              <BlogPanel title={blog.title} desc={blog.desc} img={data} />
            ))}
          </Row>
        </Col>
      </Row>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  @media (max-width: 430px) {
    padding: 0;
  }
`

export default SixthSection
