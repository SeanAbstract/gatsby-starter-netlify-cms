import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'

import '../../pricing-pages/styles.scss'
import Layout from '../../../components/Layout'
import Content, {HTMLContent} from '../../../components/Content'
import SharedJumbotron from '../../../components/SharedJumbotron'
import DownloadNow from '../../../components/DownloadNow'

type FinancingInterestRatesPageProps = {
  content: Node.isRequired,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  headerImage: any,
}

export const FinancingInterestRatesPageTemplate = (props: FinancingInterestRatesPageProps) => {
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
                FINANCING INTEREST RATES
              </h3>
              {/* <PostContent content={content} /> */}
              <p>
                With Snowball Securities, the interest rate on USD margin loan is generally based on tiers of the amount borrowed. The greater amount borrowed, the lower interest rate applied. Interest is calculated on a daily basis, charged on a monthly basis. There is no interest incurred if the loan is repaid on the same day that it is drawn. 
                <br />
                <br />
              </p>
              <p>
                The interest formula: interest = amount borrowed x (R/360). Where R is the annual interest rate prevailing on the day the fund is borrowed. A balance of interest will be sent to client on the third working day each month, which is the sum of daily interest incurred in the previous month. Clients can check balance of the interest, and around 5th each month, the balance is added to the liability of clients.
                <br />
                <br />
              </p>
              <h5>
                Financing interest rate for US Dollar
              </h5>
              <div className="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Currency</th>
                      <th scope="col">Loan amount</th>
                      <th scope="col">Interest rate <br/>– Low-commission Plan</th>
                      <th scope="col">Interest rate <br/>– Low-interest rate Plan</th>
                    </tr>
                  </thead>
                  <tr>
                    <td rowspan="5">USD</td>
                    <td>0 - 100,000</td>
                    <td>5.05%</td>
                    <td>3.05%</td>
                  </tr>
                  <tr>
                    <td>100,000.01 - 1,000,000</td>
                    <td>4.55%</td>
                    <td>2.55%</td>
                  </tr>
                  <tr>
                    <td>1,000,000.01 - 3,000,000</td>
                    <td>4.05%</td>
                    <td>2.05%</td>
                  </tr>
                  <tr>
                    <td>3,000,000.01 – 200,000,000</td>
                    <td>3.85%</td>
                    <td>1.85%</td>
                  </tr>
                  <tr>
                    <td>200,000,000.01 +</td>
                    <td>3.85%</td>
                    <td>1.85%</td>
                  </tr>
                </table>
              </div>
              <h5>
                <br/><br/>Financing interest rate for HK Dollar
              </h5>
              <div className="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Currency</th>
                      <th scope="col">Loan amount</th>
                      <th scope="col">Interest rate <br/>– Low-commission Plan</th>
                      <th scope="col">Interest rate <br/>– Low-interest rate Plan</th>
                    </tr>
                  </thead>
                  <tr>
                    <td rowspan="4">HKD</td>
                    <td>0 - 780,000</td>
                    <td>6.58%</td>
                    <td>4.58%</td>
                  </tr>
                  <tr>
                    <td>780,000.01 - 7,800,000</td>
                    <td>6.08%</td>
                    <td>4.08%</td>
                  </tr>
                  <tr>
                    <td>7,800,000.01 - 780,000,000</td>
                    <td>5.58%</td>
                    <td>3.58%</td>
                  </tr>
                  <tr>
                    <td>780,000,000.01 +</td>
                    <td>5.58%</td>
                    <td>3.58%</td>
                  </tr>
                </table>
              </div>
              <h5>
                <br/><br/>Financing interest rate for CNY Dollar
              </h5>
              <div className="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Currency</th>
                      <th scope="col">Loan amount</th>
                      <th scope="col">Interest rate <br/>– Low-commission Plan</th>
                      <th scope="col">Interest rate <br/>– Low-interest rate Plan</th>
                    </tr>
                  </thead>
                  <tr>
                    <td rowspan="4">CNH</td>
                    <td>0 - 625,000</td>
                    <td>9.625%</td>
                    <td>7.625%</td>
                  </tr>
                  <tr>
                    <td>625,000.01 - 6,250,000</td>
                    <td>9.625%</td>
                    <td>7.625%</td>
                  </tr>
                  <tr>
                    <td>6,250,000.01 - 125,000,000</td>
                    <td>9.625%</td>
                    <td>7.625%</td>
                  </tr>
                  <tr>
                    <td>125,000,000.01 +</td>
                    <td>9.625%</td>
                    <td>7.625%</td>
                  </tr>
                </table>
              </div>
              <p>
                Notes: In calculating interest rates, Snowball Securities uses a mixed interest rate based on the above tiers. For example, for a balance of more than 10,000 US dollars but less than one million US dollars, 100,000 will be calculated with the first-tier interest rate, and the remaining will be calculated with the second-tier interest rate. When determining the quoted spread, Snowball Securities will use the set benchmark rate or a benchmark rate of 0 for all benchmark rates less than 0.
                <br />
                <br />
                Snowball Securities aligns the interest rate for Low-commission Plan with interest rate on Interactive Brokers. Adjustments to interest rate are done periodically for changes in currency rates. Please refer to Interactive Brokers for updated interest rate. For existing clients, click here to view the old pricing scheme if you intend to continue with it.
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

const FinancingInterestRatesPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout footerLinks={post.frontmatter.footerLinks}>
      <FinancingInterestRatesPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

FinancingInterestRatesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default FinancingInterestRatesPage

export const pageQuery = graphql`
  query FinancingInterestRates($id: String!) {
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
