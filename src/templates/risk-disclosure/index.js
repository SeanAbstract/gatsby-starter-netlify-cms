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
              <h3>Risk Disclosure</h3>
              {props.disclosures.map((disclosure, ndx) => (
                <Yo className="pt-1" key={`disclosure-${ndx}`}>
                  <p className="mb-0" style={{fontWeight: '500'}}>
                    {disclosure.title}{' '}
                  </p>
                  <a
                    className="yo-2 mb-0"
                    style={{fontWeight: '500'}}
                    download
                    href={disclosure.file.publicURL}
                  >
                    VIEW
                  </a>
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

  console.log(post)

  return (
    <Layout footerLinks={post.frontmatter.footerLinks}>
      <RiskPageTemplateExport
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
        disclosures={post.frontmatter.disclosures}
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
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        disclosures {
          title
          file {
            publicURL
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
