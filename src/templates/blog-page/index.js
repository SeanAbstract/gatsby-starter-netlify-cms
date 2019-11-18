import React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {Row, Col, Container} from 'reactstrap'
import PageTransition from 'gatsby-plugin-page-transitions'

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
        <Container>
          <Row className="justify-content-center text-center my-4">
            <Col xs={8} className="py-5">
              <SectionText style={{color: 'black'}}>
                Stay up to date on our latest updates, news, events and other happenings
              </SectionText>
            </Col>
          </Row>
          <div className="card-columns">
            {blogs.map(blog => (
              <BlogCard {...blog} />
            ))}
          </div>
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
