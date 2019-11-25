import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'

import Layout from '../../components/Layout'
import Content, {HTMLContent} from '../../components/Content'
import SharedJumbotron from '../../components/SharedJumbotron'
import DownloadNow from '../../components/DownloadNow'

type BlogPostTemplate = {
  content: Node.isRequired,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  headerImage: any,
}

export const BlogPostPageTemplate = (props: BlogPostTemplate) => {
  const PostContent = props.contentComponent || Content
  const {content, headerImage, downloadNow} = props

  return (
    <div className="blog-post-page">
      <SharedJumbotron headerImage={headerImage} />

      <section className="blog-post-container" style={{paddingBottom: '250px'}}>
        <div className="container content">
          <div className="row justify-content-center">
            <div className="col col-10 blog-container">
              <h3>
                <br />
                Terms and Conditions
              </h3>
              {/* <PostContent content={content} /> */}
              <p>
                By accessing this website and any portal within this website, you agree to and will
                comply with the terms of use, and any applicable portal terms of use.
                <br />
                <br />
                The material on this website is given as information only. SNB does not provide any
                financial advice on buying, holding, or disposing of financial products. Any trading
                symbols displayed are for illustrative purposes only and are not intended to be
                recommendations or opinions.
                <br />
                <br />
                Whilst the information on this website has been prepared with all reasonable care,
                SNB, its directors and officers make no representation or warranty (express or
                implied) regarding the accuracy or completeness of the information on this website
                and accept no responsibility for any errors, omissions, or service unavailability.
                To the maximum extent permitted by law, SNB, its directors and officers disclaim any
                liability arising from the use of information on this website.
                <br />
                <br />
                No investment is free from risk. Returns can be positive or negative. The risk of
                loss in trading of any stock or other financial products can be substantial and it
                is possible you could receive back less money than you invest. Investors should seek
                independent and financial advice specific to their situation before making an
                investment decision. Please read through our{' '}
                <Link to="/risk-disclosure">Risk Disclosure</Link> and{' '}
                <Link to="/terms">Conditions</Link> before investing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const BlogPost = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout footerLinks={post.frontmatter.footerLinks}>
      <BlogPostPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
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
  query TermsAndConditions($id: String!) {
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
        footerLinks {
          firstRow {
            name
            href
          }
          secondRow {
            name
            href
          }
        }
      }
    }
  }
`
