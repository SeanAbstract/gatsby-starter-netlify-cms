import React from 'react'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import {Row, Col, Container} from 'reactstrap'

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
export function BlogPageTemplate({title, content, contentComponent, image}: Props) {
  // const PageContent = contentComponent || Content

  return (
    <div>
      <SharedJumbotron headerImage={props.headerImage} title="About" description="Snowball" />

      <section>
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
              <BlogCard type={blog.type} title={blog.title} />
            ))}
          </div>
        </Container>
      </section>
    </div>
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
  const {markdownRemark: post, placeholderImage: image} = data

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />
      <BlogPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={image}
      />
    </Layout>
  )
}

export const blogPageQuery = graphql`
  query BlogsPage($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    placeholderImage: file(relativePath: {eq: "landing-page-2.png"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
