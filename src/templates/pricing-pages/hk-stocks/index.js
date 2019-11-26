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
                <br />
                <br />
              </p>
              {/* Table to go here */}
              <h5>
                Withholding charges:
              </h5>
              {/* Table to go here */}
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
              {/* Table to go here */}
              <h5>
                Charges for subscriptions of new HK stocks:
              </h5>
              {/* Table to go here */}
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
