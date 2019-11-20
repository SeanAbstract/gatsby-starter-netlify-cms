import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import Content, {HTMLContent} from '../../components/Content'
import SharedJumbotron from '../../components/SharedJumbotron'

import './styles.scss'
import DownloadNow from '../../components/DownloadNow'

type BlogPostTemplate = {
  content: Node.isRequired,
  contentComponent: any,
  description: string,
  title: string,
  helmet: Object,
  featuredImage: any,
  tags: Array<string>,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  nextBlogLink: string,
  nextBlogTitle: string,
}

export const BlogPostPageTemplate = (props: BlogPostTemplate) => {
  const PostContent = props.contentComponent || Content
  const {
    content,
    description,
    title,
    helmet,
    featuredImage,
    tags,
    downloadNow,
    nextCategory,
  } = props

  return (
    <>
      <div className="blog-post-page">
        <SharedJumbotron headerImage={featuredImage} blur />

        <section className="blog-post-container">
          {helmet || ''}
          <div className="container content">
            <div className="row justify-content-center">
              <div className="col col-10 blog-container">
                <h2 className="title is-size-2 has-text-weight-bold">{title}</h2>
                <p>{description}</p>
                <PostContent content={content} />
                <div
                  style={{position: 'relative', width: '100vw', height: '150px'}}
                  className="mt-5"
                >
                  {props.nextBlogLink && (
                    <Link to={props.nextBlogLink}>
                      <NextBlog>
                        <div>
                          <p className="category mb-0">{nextCategory}</p>
                          <p className="title">{props.nextBlogTitle}</p>
                        </div>
                        <small>Next Article</small>
                      </NextBlog>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download NOw */}
      </div>
      <DownloadNow
        mainText={downloadNow.mainText}
        subText={downloadNow.subText}
        image={downloadNow.image}
      />
    </>
  )
}

const BlogPost = ({data, pageContext}) => {
  const {markdownRemark: post} = data

  console.log(pageContext)

  return (
    <Layout>
      <BlogPostPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
        featuredImage={post.frontmatter.featuredimage}
        downloadNow={post.frontmatter.downloadNow}
        nextBlogLink={pageContext.next && pageContext.next.fields.slug}
        nextBlogTitle={pageContext.nextTitle && pageContext.nextTitle}
        nextCategory={pageContext.nextCategory && pageContext.nextCategory}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

const NextBlog = styled.div`
  height: 150px;
  width: 450px;
  background-color: red;
  position: absolute;
  right: 225px;
  top: 0;

  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  justify-content: space-between;
  border-radius: 2px;
  background-color: #f5f5f5;

  .category {
    color: #444444;
    font-family: Theinhardt;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
  }

  .title {
    color: #212b36;
    font-family: Theinhardt;
    font-size: 20px;
    line-height: 28px;
  }

  small {
    color: black;
  }
`

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        category
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
