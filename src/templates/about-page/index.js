/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React, {useState} from 'react'
import {graphql} from 'gatsby'
import * as showdown from 'showdown'

import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import SharedJumbotron from '../../components/SharedJumbotron'
import HistoryCard from '../../components/HistoryCard'
import CompanyCard from '../../components/CompanyCard'
import DownloadNow from '../../components/DownloadNow'
import businessLogo from '../../img/business.svg'
import mobileLogo from '../../img/mobile.svg'
import peopleLogo from '../../img/people.svg'

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
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
}

const images = [mobileLogo, peopleLogo, businessLogo]

export const AboutPageTemplate = (props: AboutTemplate) => {
  const [currentNdx, setCurrentNdx] = useState(0)
  const [tabDescription, setTabDescription] = useState(props.tabs[0].description)

  function renderDescription() {
    const converter = new showdown.Converter()
    const html = converter.makeHtml(tabDescription)

    return html
  }

  return (
    <>
      <SharedJumbotron headerImage={props.headerImage} title="About" description="Snowball" />

      <div className="about-page container-fluid">
        <section className="pt-5 pb-5">
          <div className="row mb-5">
            <div className="col-md-8 col-sm-10 mx-auto text-center">
              <h3 className="section-leading-text">{props.mainpitch.title}</h3>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-6 mx-auto">
              <div>
                {/* <p>{props.mainpitch.description}</p> */}
                <p>
                  Our digital platform gives customers access to China A shares and securities
                  listed on the Stock Exchange of Hong Kong (SEHK), the New York Stock Exchange
                  (NYSE), NASDAQ and other markets.
                </p>
                {/* <p>{props.mainpitch.secondDescription}</p> */}
                <p>
                  With one account, our clients are able to trade securities listed in China, the
                  United States, Hong Kong, Japan and other countries and build a portfolio of
                  shares in big international world's best-known companies like Alibaba, PetroChina,
                  Microsoft and Google.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="container">
              <div className="col-md-9 mx-auto">
                <div className="row justify-content-around">
                  {props.tabs.map((tab, ndx) => (
                    <div
                      className="col-md-3 d-flex justify-content-center align-items-center flex-column mb-5"
                      key={tab.title}
                      style={{borderBottom: ndx === currentNdx ? '2px solid #006FBB' : ''}}
                      onClick={() => {
                        setTabDescription(tab.description)
                        setCurrentNdx(ndx)
                      }}
                    >
                      <PreviewCompatibleImage
                        imageInfo={images[ndx]}
                        style={{height: '100px', width: '100px'}}
                        className={`mb-4 ${ndx !== currentNdx ? 'grayscale' : ''}`}
                      />

                      <h5 className={ndx === currentNdx ? 'text-primary' : ''}>{tab.title}</h5>
                    </div>
                  ))}
                </div>
                <div
                  className="container tab-description"
                  dangerouslySetInnerHTML={{__html: renderDescription()}}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="trade-section">
          <div className="row no-gutters h-100">
            <div className="col-md-4 img-left" />
            <div className="col-md-4 d-flex justify-content-center align-items-center bg-primary">
              <h1 className="big-subtitle text-light" style={{fontSize: '64px'}}>
                Trade Electronically
              </h1>
            </div>
            <div className="col-md-4 img-right" />
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

        {/* Download NOw */}
        <DownloadNow
          mainText={props.downloadNow.mainText}
          subText={props.downloadNow.subText}
          image={props.downloadNow.image}
        />
      </div>
    </>
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

  console.log(post)

  return (
    <Layout white>
      <AboutPageTemplate
        mainpitch={post.frontmatter.mainpitch}
        tabs={post.frontmatter.tabs}
        headerImage={post.frontmatter.headerImage}
        historyCards={post.frontmatter.historyCards}
        investors={post.frontmatter.investors}
        partners={post.frontmatter.partners}
        downloadNow={post.frontmatter.downloadNow}
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
              fluid(maxWidth: 240, quality: 100) {
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
      }
    }
  }
`
