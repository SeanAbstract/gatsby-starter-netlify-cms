import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'

import '../../pricing-pages/styles.scss'
import Layout from '../../../components/Layout'
import Content, {HTMLContent} from '../../../components/Content'
import SharedJumbotron from '../../../components/SharedJumbotron'
import DownloadNow from '../../../components/DownloadNow'

type HKWarrantsCBBCSPageProps = {
  content: Node.isRequired,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  headerImage: any,
}

export const HKWarrantsCBBCSPageTemplate = (props: HKWarrantsCBBCSPageProps) => {
  const PostContent = props.contentComponent || Content
  const {content, headerImage, downloadNow} = props

  return (
    <div className="pricing-pages">
      <SharedJumbotron headerImage={headerImage} />

      <section className="blog-post-container" style={{paddingBottom: '250px'}}>
        <div className="container content">
          <div className="row justify-content-center">
            <div className="col col-10 blog-container">
              <h3>
                HK WARRANTS AND CBBCS
              </h3>
              {/* <PostContent content={content} /> */}
              <p>
                Snowball Securities offers two flexible commission plans. Clients can switch between plans according to their specific needs. 
              </p>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Charged by</th>
                  </tr>
                </thead>
                <tr>
                  <td>Commission <br/>– Low-commission Plan</td>
                  <td>0.03% of trade value, per deal <br/>HKD 12 minimum per order</td>
                  <td>Snowball Securities</td>
                </tr>
                <tr>
                  <td>Commission <br/>– Low-interest rate Plan</td>
                  <td>0.08% of trade value, per deal <br/>HKD 12 minimum per order</td>
                  <td>Snowball Securities</td>
                </tr>
                <tr>
                  <td>Transaction fee</td>
                  <td>0.005% of trade value + HKD 0.5</td>
                  <td>Hong Kong Stock Exchange</td>
                </tr>
                <tr>
                  <td>Clearing fee</td>
                  <td>0.002% of trade value <br/>HKD 2.00 minimum</td>
                  <td>Hong Kong Stock Exchange</td>
                </tr>
                <tr>
                  <td>Transaction levy</td>
                  <td>0.0027% of trade value</td>
                  <td>Hong Kong Stock Exchange</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const HKWarrantsCBBCSPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout footerLinks={post.frontmatter.footerLinks}>
      <HKWarrantsCBBCSPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

HKWarrantsCBBCSPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default HKWarrantsCBBCSPage

export const pageQuery = graphql`
  query HKWarrantsCBBCS($id: String!) {
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
