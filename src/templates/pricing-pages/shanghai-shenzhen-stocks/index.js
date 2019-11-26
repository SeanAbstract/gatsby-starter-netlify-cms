import React from 'react'
import { Table } from 'reactstrap'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'

import '../../pricing-pages/styles.scss'
import Layout from '../../../components/Layout'
import Content, {HTMLContent} from '../../../components/Content'
import SharedJumbotron from '../../../components/SharedJumbotron'
import DownloadNow from '../../../components/DownloadNow'

type ShanghaiShenzhenStocksProps = {
  content: Node.isRequired,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  headerImage: any,
}

export const ShanghaiShenzhenStocksPageTemplate = (props: ShanghaiShenzhenStocksProps) => {
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
                SHANGHAI/SHENZHEN CONNECT
              </h3>
              {/* <PostContent content={content} /> */}
              <p>
                Snowball Securities offers two flexible commission plans. Clients can switch between plans according to their specific needs.
              </p>
              <div className="table-responsive-xl">
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
                    <td>$0.00 per share on orders under CNH 50,000 <br/><br/>0.03% per share on orders above CNH 50,000</td>
                    <td>Snowball Securities</td>
                  </tr>
                  <tr>
                    <td>Commission <br/>– Low-interest rate Plan</td>
                    <td>$0.00 per share on orders under CNH 18,750 <br/><br/>0.08% per share on orders above CNH 18,750</td>
                    <td>Snowball Securities</td>
                  </tr>
                  <tr>
                    <td>Platform fee</td>
                    <td>CNH 18 per order</td>
                    <td>Snowball Securities</td>
                  </tr>
                </table>
              </div>
              <h5>
                <br/><br/>Withholding charges:
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
                    <td>Handling fee</td>
                    <td>0.00487% of trade value</td>
                    <td>Stock Exchange</td>
                  </tr>
                  <tr>
                    <td>Securities <br/>Management fee</td>
                    <td>0.002% of trade value </td>
                    <td>CSRC</td>
                  </tr>
                  <tr>
                    <td>Stock Settlement <br/>and Transfer fee</td>
                    <td>0.004% of trade value</td>
                    <td>Stock Exchange</td>
                  </tr>
                  <tr>
                    <td>Stamp duty</td>
                    <td>0.1% of trade value </td>
                    <td>SAT</td>
                  </tr>
                </table>
              </div>
              <p>
                Notes: The withholding charges are calculated on the basis of each deal, and an order can be divided into to a number of deals to be fulfilled by the exchange. 
                <br />
                All the withholding charges are subject to modifications made by Stock Exchange and Chinese government, for more information visit Stock Exchange website.
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

const ShanghaiShenzhenStocksPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout footerLinks={post.frontmatter.footerLinks}>
      <ShanghaiShenzhenStocksPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

ShanghaiShenzhenStocksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ShanghaiShenzhenStocksPage

export const pageQuery = graphql`
  query ShanghaiShenzhenStocks($id: String!) {
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
