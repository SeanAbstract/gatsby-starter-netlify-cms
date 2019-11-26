import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'

import '../../pricing-pages/styles.scss'
import Layout from '../../../components/Layout'
import Content, {HTMLContent} from '../../../components/Content'
import SharedJumbotron from '../../../components/SharedJumbotron'
import DownloadNow from '../../../components/DownloadNow'

type USStockOptionsProps = {
  content: Node.isRequired,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  headerImage: any,
}

export const USStockOptionsPageTemplate = (props: USStockOptionsProps) => {
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
                US STOCK OPTIONS
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
                  </tr>
                </thead>
                <tr>
                  <td>Commission</td>
                  <td>USD 0.7 per contract <br/>USD 1 minimum per order</td>
                </tr>
                <tr>
                  <td>Option Regulation Fee (ORF)*</td>
                  <td>USD 0.0431 per contract</td>
                </tr>
                <tr>
                  <td>Transaction fee (only charged for sell orders)</td>
                  <td>USD 0.000013 x Total Sell Value</td>
                </tr>
                <tr>
                  <td>FINRA transaction activity fee (only charged at the time of sale)</td>
                  <td>USD 0.002 x Quantity Sold</td>
                </tr>
                <tr>
                  <td>Options Clearing Company (OCC) Clearing Costs</td>
                  <td>USD 0.03-USD 0.05 per contract, depending on the number of contracts</td>
                </tr>
                <tr>
                  <td>Exchange fees</td>
                  <td>According to the exchange traded on, fees vary</td>
                </tr>
              </table>
              <h5>
                Notes:
              </h5>
              <p>
                In the option transactions, additional costs may be incurred depending on the extent of liquidity generated. Refer to the stock exchange for details. Currently, Snowball Securities App does not support trading of US stock options. Clients can trade on Interactive Brokers official trading terminal TWS.
                <br />
                <br />
              </p>
              <p>
                *ORFs charged by the following exchanges: AMEX, BATS, BOX, CBOE, CBOE2, ISE, GEMINI, MIAX, NOM, PCX, PHLX.
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

const USStockOptionsPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout footerLinks={post.frontmatter.footerLinks}>
      <USStockOptionsPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

USStockOptionsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default USStockOptionsPage

export const pageQuery = graphql`
  query USStockOptions($id: String!) {
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
