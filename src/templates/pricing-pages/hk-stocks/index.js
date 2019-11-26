import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'

import '../../pricing-pages/styles.scss'
import Layout from '../../../components/Layout'
import Content, {HTMLContent} from '../../../components/Content'
import SharedJumbotron from '../../../components/SharedJumbotron'
import DownloadNow from '../../../components/DownloadNow'

type HKStocksPageProps = {
  content: Node.isRequired,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  headerImage: any,
}

export const HKStocksPageTemplate = (props: HKStocksPageProps) => {
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
                HK STOCKS
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
                  <td>$0.00 per share on orders under HKD 60,000 <br/>0.03% per share on orders above HKD 60,000</td>
                  <td>Snowball Securities</td>
                </tr>
                <tr>
                  <td>Commission <br/>– Low-interest rate Plan</td>
                  <td>$0.00 per share on orders under HKD 22,500 <br/>0.08% per share on orders above HKD 22,500</td>
                  <td>Snowball Securities</td>
                </tr>
                <tr>
                  <td>Platform fee</td>
                  <td>HKD 18  per order</td>
                  <td>Snowball Securities</td>
                </tr>
              </table>
              <h5>
                <br/>Withholding charges:
              </h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Charged by</th>
                  </tr>
                </thead>
                <tr>
                  <td>Clearing fee</td>
                  <td>0.002% of trade value, per deal <br/>HKD 2.00 minimum</td>
                  <td>Hong Kong Clearing House</td>
                </tr>
                <tr>
                  <td>Stamp duty*</td>
                  <td>0.1% of trade value, per deal</td>
                  <td>Hong Kong government</td>
                </tr>
                <tr>
                  <td>Transaction fee</td>
                  <td>0.005% of trade value, per deal <br/>HKD 0.51 minimum </td>
                  <td>Hong Kong Stock Exchange</td>
                </tr>
                <tr>
                  <td>Transaction levy</td>
                  <td>0.0027% of trade value, per deal <br/>HKD 0.01 minimum</td>
                  <td>Securities and Futures <br/>Commission of HK</td>
                </tr>
              </table>
              <p>
                Notes: The withholding charges are calculated on the basis of each deal, and an order can be divided into to a number of deals to be fulfilled by the stock exchange. All the withholding charges are subject to modifications made by Stock Exchange and HK government, for more information visit Stock Exchange website. 
                <br />
                <br />
              </p>
              <p>
                * For Stamp duty, decimals are rounded up to the nearest dollar e.g. HKD 2.01 as calculated from the formula is charged as HKD 3.00. Not applicable to warrants and structured products.
                <br />
                <br />
              </p>
              <h5>
                Other charges for HK stocks:
              </h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Charged by</th>
                  </tr>
                </thead>
                <tr>
                  <td>Withholding dividend tax</td>
                  <td>Stocks of Hong Kong companies are exempt from dividend tax. <br/><br/>H shares subject to dividend tax rate of 10% (automatically withholding at the time of distribution)</td>
                  <td>Hong Kong tax authority</td>
                </tr>
                <tr>
                  <td>Position transfer fee</td>
                  <td>HKD 0 transferring position in <br/><br/>HKD 400 transferring position out</td>
                  <td>Snowball Securities</td>
                </tr>
                <tr>
                  <td>Real-time quote fees</td>
                  <td>HKD 0 for Snowball clients</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>Account management fee (or minimum monthly commission)</td>
                  <td>HKD 0 for Snowball clients</td>
                  <td>None</td>
                </tr>
              </table>
              <h5>
                <br/><br/>Charges for subscriptions of new HK stocks:
              </h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Charged by</th>
                  </tr>
                </thead>
                <tr>
                  <td>Subscription fee</td>
                  <td>Subscription financing: HKD100 for a single deal. Charged once subscription initiated.</td>
                  <td>External agency</td>
                </tr>
                <tr>
                  <td>Interest of subscription financing</td>
                  <td>Financing annual interest rate is around 4% (slightly adjusted according to the market capital condition when each stock is listed)</td>
                  <td>Snowball Securities</td>
                </tr>
                <tr>
                  <td>Trading levy, trading fee and brokerage commission</td>
                  <td>1.0077% <br/>(only charged for ballot)</td>
                  <td>Securities and Futures Commission of HK, HKEX and brokerage firm</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const HKStocksPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout footerLinks={post.frontmatter.footerLinks}>
      <HKStocksPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

HKStocksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default HKStocksPage

export const pageQuery = graphql`
  query HKStocks($id: String!) {
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
