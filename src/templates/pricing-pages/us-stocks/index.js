import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'

import '../../pricing-pages/styles.scss'
import Layout from '../../../components/Layout'
import Content, {HTMLContent} from '../../../components/Content'
import SharedJumbotron from '../../../components/SharedJumbotron'
import DownloadNow from '../../../components/DownloadNow'

type USStocksProps = {
  content: Node.isRequired,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  headerImage: any,
}

export const USStocksPageTemplate = (props: USStocksProps) => {
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
                US STOCKS
              </h3>
              {/* <PostContent content={content} /> */}
              <p>
                Snowball Securities offers two flexible commission plans. Clients can switch between plans according to their specific needs. 
              </p>
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Rate</th>
                      <th scope="col">Charged by</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>Commission<br/> – Low-commission Plan</td>
                    <td>USD 0.002 per share<br/> USD 0.99 minimum per order</td>
                    <td>Snowball Securities</td>
                  </tr>
                  <tr>
                    <td>Commission<br/> – Low-interest rate Plan</td>
                    <td>USD 0.008 per share <br/>USD 0.99 minimum per order</td>
                    <td>Snowball Securities</td>
                  </tr>
                  <tr>
                    <td>Platform fee</td>
                    <td>USD 0.003 per share <br/>USD 1.00 minimum per order</td>
                    <td>Snowball Securities</td>
                  </tr>
                  <tr>
                    <td>Withholding charges*</td>
                    <td>USD 0.003 per share</td>
                    <td>External agencies</td>
                  </tr>
                </table>
              </div>
              <p>
                Notes: We advise investors to be more prudent with low-priced stocks. Trading low-priced stocks (below $1) carries risk of stock prices being volatile, and the risk of delisting. The charges of commission and platform fee on a trade together is capped at 1% of trade value it exceeds USD1.99 and also exceeds 1% of the trade value.
                <br />
                <br />
              </p>
              <p>
                *The Withholding charges are a simplified summary of all kinds of miscellaneous fees collected by external agencies such as exchanges, SEC, and FINRA.
                <br />
                <br />
              </p>
              <h5>
                Other service charges for US stocks:
              </h5>
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
                    <td>Dividend tax</td>
                    <td>10% of dividend (automatic withholding at the time of distribution)</td>
                    <td>US tax authority</td>
                  </tr>
                  <tr>
                    <td>American Depositary Receipt (ADR) custodial fees</td>
                    <td>USD 0.01~USD 0.03/share</td>
                    <td>Deposit Trust Company (DTC)</td>
                  </tr>
                  <tr>
                    <td>Capital gains tax</td>
                    <td>New Zealand residents, Mainland China residents fill out W8ben to exempt from capital gains tax</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Position transfer fee</td>
                    <td>There is no charge for ACATS transfer on Snowball Securities</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Real-time quote fees</td>
                    <td>Free on Snowball Securities</td>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <td>Account management fee (or minimum monthly commission)</td>
                    <td>Free on Snowball Securities</td>
                    <td>N/A</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const USStocksPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout footerLinks={post.frontmatter.footerLinks}>
      <USStocksPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

USStocksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default USStocksPage

export const pageQuery = graphql`
  query USStocks($id: String!) {
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
