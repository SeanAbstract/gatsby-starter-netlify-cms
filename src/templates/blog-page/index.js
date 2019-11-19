import React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {Row, Col, Container} from 'reactstrap'
import PageTransition from 'gatsby-plugin-page-transitions'

import tempBgImg from '../../../static/img/second-splash.jpg'
import Layout from '../../components/Layout'
import {HTMLContent} from '../../components/Content'
import BlogCard from '../../components/blog/blogCard'
import SharedJumbotron from '../../components/SharedJumbotron'

const blogs = [
  {type: 'News', title: 'This probably has a very interesting title'},
  {type: 'Event', title: 'This event is even better bro!'},
  {
    type: 'Guide',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {type: 'Guide', title: 'Is it really?'},
  {
    type: 'Guide',
    title:
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {type: 'News', title: 'This probably has a very interesting title'},
  {type: 'Event', title: 'This event is even better bro!'},
  {
    type: 'Guide',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

type Props = {
  title: string,
  content: string,
  contentComponent: any,
  image: any,
}

// eslint-disable-next-line no-unused-vars
export function BlogPageTemplate({title, content, contentComponent, image, headerImage}: Props) {
  // const PageContent = contentComponent || Content

  return (
    <PageTransition>
      <SharedJumbotron headerImage={headerImage} title="Blog" description="News" />

      <section style={{backgroundColor: 'white'}}>
        <Container style={{paddingBottom: '75px'}}>
          <Row className="justify-content-center text-center py-4">
            <Col xs={8} className="py-5">
              <SectionText style={{color: 'black'}}>
                Stay up to date on our latest updates, news, events and other happenings
              </SectionText>
            </Col>
          </Row>
          <GridContainer>
            {blogs.map((blog, ndx) => (
              <GridItem className={`item-${(ndx + 1) % 9}`} key={`blog-${ndx}`}>
                <div>
                  <p className="type">{blog.type}</p>
                  <h5>{blog.title}</h5>
                </div>
              </GridItem>
            ))}
          </GridContainer>
        </Container>
      </section>
    </PageTransition>
  )
}

const SectionText = styled.h3`
  font-size: 26px;

  @media (min-width: 425px) {
    font-size: 32px;
  }
`

type BlogPageProps = {
  data: any,
}

export default function BlogPage({data}: BlogPageProps) {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <Helmet title="Blogs" />
      <BlogPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 20px;

  .item-1 {
    grid-column: auto / span 1;
  }

  .item-2 {
    grid-column: auto / span 3;
  }

  .item-3 {
    grid-column: auto / span 2;
  }

  .item-4 {
    grid-column: auto / span 1;
  }

  .item-5 {
    grid-column: auto / span 1;
  }

  .item-6 {
    grid-column: auto / span 1;
  }

  .item-7 {
    grid-column: auto / span 1;
  }

  .item-8 {
    grid-column: auto / span 2;
  }
`

const GridItem = styled.div`
  padding: 20px;
  height: 175px;
  color: white;
  position: relative;
  z-index: 1;
  cursor: pointer;

  &:hover {
    &::before {
      filter: grayscale(0%);
    }
  }

  &::before {
    transition: filter 0.3s;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${tempBgImg});
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(100%);
    z-index: -1;
  }

  .type {
    margin-bottom: 0.5rem;
  }
`

export const pageQuery = graphql`
  query BlogsPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        headerImage {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        downloadNow {
          mainText
          subText
          image {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
