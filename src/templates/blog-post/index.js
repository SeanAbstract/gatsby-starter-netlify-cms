import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import Content, {HTMLContent} from '../../components/Content'
import SharedJumbotron from '../../components/SharedJumbotron'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
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

  console.log(props)

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

                {props.prevBlogLink && (
                  <Link to={props.prevBlogLink}>
                    <NextBlog className="flex-row-reverse" style={{left: '-225px'}}>
                      <img
                        src={`../..${props.prevImage}`}
                        alt=""
                        style={{
                          height: '150px',
                          width: '150px',
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                      <div className="h-100 d-flex justify-content-between px-3 py-3 flex-column">
                        <div>
                          <p className="category mb-0">{props.prevCategory}</p>
                          <p className="title">{props.prevBlogTitle}</p>
                        </div>
                        <small>Previous Article</small>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{width: '45px', background: '#006FBB'}}
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="chevron-right"
                          className="svg-inline--fa fa-chevron-right fa-w-10"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          style={{height: '25px'}}
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chevron-left"
                            className="svg-inline--fa fa-chevron-left fa-w-10"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="white"
                              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                            />
                          </svg>
                        </svg>
                      </div>
                    </NextBlog>
                  </Link>
                )}
                {props.nextBlogLink && (
                  <Link to={props.nextBlogLink}>
                    <NextBlog style={{right: '-225px'}}>
                      <img
                        src={`../..${props.nextImage}`}
                        alt=""
                        style={{
                          height: '150px',
                          width: '150px',
                          objectFit: 'cover',
                          objectPosition: 'center',
                        }}
                      />
                      <div className="h-100 d-flex justify-content-between px-3 py-3 flex-column">
                        <div>
                          <p className="category mb-0">{nextCategory}</p>
                          <p className="title">{props.nextBlogTitle}</p>
                        </div>
                        <small>Next Article</small>
                      </div>
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{width: '45px', background: '#006FBB'}}
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="chevron-right"
                          className="svg-inline--fa fa-chevron-right fa-w-10"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          style={{height: '25px'}}
                        >
                          <path
                            fill="white"
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                          />
                        </svg>
                      </div>
                    </NextBlog>
                  </Link>
                )}
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
        nextImage={pageContext.next && pageContext.next.frontmatter.featuredimage.publicURL}
        prevBlogLink={pageContext.prev && pageContext.prev.fields.slug}
        prevBlogTitle={pageContext.prevTitle && pageContext.prevTitle}
        prevCategory={pageContext.prevCategory && pageContext.prevCategory}
        prevImage={pageContext.prev && pageContext.prev.frontmatter.featuredimage.publicURL}
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

  bottom: 0px;

  display: flex;
  flex-direction: row;

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
