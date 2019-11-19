import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Helmet from 'react-helmet'
import {graphql, Link} from 'gatsby'

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
}

export const BlogPostPageTemplate = (props: BlogPostTemplate) => {
  const PostContent = props.contentComponent || Content
  const {content, description, title, helmet, featuredImage, tags, downloadNow} = props

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
                {/* {tags && tags.length ? (
                <div style={{marginTop: `4rem`}}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={`${tag}tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null} */}
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

const BlogPost = ({data}) => {
  const {markdownRemark: post} = data

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
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

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
