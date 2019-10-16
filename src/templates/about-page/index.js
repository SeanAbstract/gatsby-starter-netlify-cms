/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React, {useState} from 'react'
import {graphql} from 'gatsby'

import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import Content, {HTMLContent} from '../../components/Content'
import SharedJumbotron from '../../components/SharedJumbotron'
import HistoryCard from '../../components/HistoryCard'
import CompanyCard from '../../components/CompanyCard'

import './styles.scss'

type AboutTemplate = {
  headerImage: any,
  mainpitch: {
    title: string,
    description: string,
    secondDescription: string,
  },
  tabs: Array<{title: string, icon: any, description: any}>,
  historyCards: Array<{date: string, description: string}>,
  investors: Array<{brandLogo: string, brandDescription: string}>,
  partners: Array<{brandLogo: string, brandDescription: string}>,
  contentComponent: any,
}

export const AboutPageTemplate = (props: AboutTemplate) => {
  const PostContent = props.contentComponent || Content

  const [tabDescription, setTabDescription] = useState(props.tabs[0].description)

  return (
    <div className="about-page">
      <SharedJumbotron headerImage={props.headerImage} title="About" />

      <section className="pt-3 pb-5">
        <div className="row">
          <div className="container">
            <div className="col-md-9 col-sm-10 mx-auto text-center">
              <h3 className="section-leading-text">{props.mainpitch.title}</h3>
              <div className="text-left">
                <p>{props.mainpitch.description}</p>
                <p>{props.mainpitch.secondDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="container">
            <div className="col-md-9 mx-auto">
              <div className="row">
                {props.tabs.map(tab => (
                  <div
                    className="col-md-4 d-flex justify-content-center"
                    key={tab.title}
                    onClick={() => setTabDescription(tab.description)}
                  >
                    <PreviewCompatibleImage imageInfo={tab.icon} />

                    <p>{tab.title}</p>
                  </div>
                ))}
              </div>
              <PostContent content={tabDescription} />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section>
        <div
          className="row justify-content-center align-items-center bg-grey"
          style={{height: '60vh'}}
        >
          <div className="container">
            <div className="col-md-12 d-flex justify-content-center mx-auto flex-column align-items-center">
              <h1 className="big-text text-primary mb-5">History</h1>

              <div className="d-flex">
                {props.historyCards.map((historyItem, key, {length}) => (
                  <>
                    <HistoryCard date={historyItem.date} description={historyItem.description} />
                    {key < length - 1 && <div className="timeline-icon" />}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="pt-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="big-text text-primary">People</h1>
          </div>

          {/* Investors */}
          <div className="text-center mb-3">
            <h3 className="big-subtitle text-secondary">Investors</h3>

            <div className="row mt-5">
              {props.investors.map((investor, ndx) => (
                <CompanyCard
                  key={ndx}
                  brandLogo={investor.brandLogo}
                  brandDescription={investor.brandDescription}
                />
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="text-center">
            <h3 className="big-subtitle text-secondary">Partners</h3>

            <div className="row mt-5">
              {props.partners.map((investor, ndx) => (
                <CompanyCard
                  key={ndx}
                  brandLogo={investor.brandLogo}
                  brandDescription={investor.brandDescription}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

type Props = {
  data: {
    markdownRemark: {
      frontmatter: AboutTemplate,
    },
  },
}

const AboutPage = ({data}: Props) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <AboutPageTemplate
        mainpitch={post.frontmatter.mainpitch}
        tabs={post.frontmatter.tabs}
        headerImage={post.frontmatter.headerImage}
        historyCards={post.frontmatter.historyCards}
        contentComponent={HTMLContent}
        investors={post.frontmatter.investors}
        partners={post.frontmatter.partners}
      />
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        headerImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
          description
          secondDescription
        }
        tabs {
          title
          description
          icon {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        historyCards {
          date
          description
        }
        investors {
          brandLogo {
            childImageSharp {
              fluid(maxWidth: 240, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          brandDescription
        }
        partners {
          brandLogo {
            childImageSharp {
              fluid(maxWidth: 240, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          brandDescription
        }
      }
    }
  }
`
