import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'

import '../terms/styles.scss'
import Layout from '../../components/Layout'
import Content, {HTMLContent} from '../../components/Content'
import SharedJumbotron from '../../components/SharedJumbotron'
import DownloadNow from '../../components/DownloadNow'

type ThankYouPageTemplate = {
  content: Node.isRequired,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  headerImage: any,
}

export const ThankYouPageTemplateExport = (props: ThankYouPageTemplate) => {
  const PostContent = props.contentComponent || Content
  const {content, headerImage, downloadNow} = props

  return (
    <div className="terms-page">
      <SharedJumbotron headerImage={headerImage} />

      <section className="blog-post-container" style={{paddingBottom: '250px'}}>
        <div className="container content">
          <div className="row justify-content-center">
            <div className="col col-10 blog-container">
<<<<<<< HEAD
              <h3>
                <br />
                Thank you for your message
              </h3>
=======
              <h3>Thank you for your message</h3>
>>>>>>> edb941355ed19264afea4858a172043211809649
              {/* <PostContent content={content} /> */}
              <p>
                We have successfully received your message and we'll be in contact with you shortly.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const ThankYou = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <ThankYouPageTemplateExport
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

ThankYou.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ThankYou

export const pageQuery = graphql`
  query ThankYou($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        headerImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
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
