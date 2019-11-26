import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import styled from 'styled-components'

import '../terms/styles.scss'
import Layout from '../../components/Layout'
import Content, {HTMLContent} from '../../components/Content'
import SharedJumbotron from '../../components/SharedJumbotron'

type RiskPageTemplate = {
  content: Node.isRequired,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  headerImage: any,
}

const disclosures = [
  '1. Margin Risk Transaction Disclosure',
  '2. Forex and Multi-currency Account Disclosure',
  '3. Intraday Trading Risk Disclosure',
  '4. After-hours trading risk disclosure',
  '5. Commodity Futures Trading Commission Risk Disclosure Statement',
  '6. Portfolio Margin Risk Disclosure',
  '7. Option Trading Risk Disclosure',
  '8. CFTC Risk Disclosure - Appendix to Rule 1.55',
  '9. CFTC Risk Disclosure Statement - Rule 1.55(b)',
]

export const RiskPageTemplateExport = (props: RiskPageTemplate) => {
  const PostContent = props.contentComponent || Content
  const {content, headerImage, downloadNow} = props

  return (
    <div className="terms-page">
      <SharedJumbotron headerImage={headerImage} />

      <section className="blog-post-container" style={{paddingBottom: '120px'}}>
        <div className="container content">
          <div className="row justify-content-center">
            <div className="col col-10 blog-container">
              <h3>
                Risk Disclosure
              </h3>
              {disclosures.map((disclosure, ndx) => (
                <Yo className="pt-1" key={`disclosure-${ndx}`}>
                  <p className="mb-0" style={{fontWeight: '500'}}>
                    {disclosure}{' '}
                  </p>
                  <p className="yo-2 mb-0" style={{fontWeight: '500'}}>
                    VIEW
                  </p>
                </Yo>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const RiskPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout footerLinks={post.frontmatter.footerLinks}>
      <RiskPageTemplateExport
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

RiskPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

const Yo = styled.div`
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.primary};
  padding: 0 20px;

  .yo-2 {
    color: #006fbb;
  }

  &:nth-child(2) {
    border-top: 1px solid ${props => props.theme.primary};
  }
`

export default RiskPage

export const pageQuery = graphql`
  query RiskDisclosure($id: String!) {
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
