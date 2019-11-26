import React from 'react'
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
                <br />
                <br />
              </p>
              {/* Table to go here */}
              <h5>
                Withholding charges:
              </h5>
              {/* Table to go here */}
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
