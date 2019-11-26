import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'

import '../../pricing-pages/styles.scss'
import Layout from '../../../components/Layout'
import Content, {HTMLContent} from '../../../components/Content'
import SharedJumbotron from '../../../components/SharedJumbotron'
import DownloadNow from '../../../components/DownloadNow'

type HKStockOptionsPageProps = {
  content: Node.isRequired,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  headerImage: any,
}

export const HKStockOptionsPageTemplate = (props: HKStockOptionsPageProps) => {
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
                HK STOCK OPTIONS
              </h3>
              {/* <PostContent content={content} /> */}
              <p>
                Snowball Securities offers two flexible commission plans. Clients can switch between plans according to their specific needs. 
              </p>
              <div className="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Rate</th>
                      <th scope="col">Charged by</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>Commission</td>
                    <td>HKD 30 per contract <br/>HKD 30 minimum</td>
                    <td>Snowball Securities</td>
                  </tr>
                </table>
              </div>
              <p>
                Notes: Snowball Securities App currently does not support trading of Hong Kong stock options. You can trade on Interactive Brokers official trading terminal TWS. 
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

const HKStockOptionsPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout footerLinks={post.frontmatter.footerLinks}>
      <HKStockOptionsPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

HKStockOptionsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default HKStockOptionsPage

export const pageQuery = graphql`
  query HKStockOptions($id: String!) {
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
