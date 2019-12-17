/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React, {useState, useEffect} from 'react'
import {graphql} from 'gatsby'
import * as showdown from 'showdown'
import PageTransition from 'gatsby-plugin-page-transitions'
import Slider from 'react-slick'

import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import SharedJumbotron from '../../components/SharedJumbotron'
import HistoryCard from '../../components/HistoryCard'
import CompanyCard from '../../components/CompanyCard'
import DownloadNow from '../../components/DownloadNow'
import businessLogo from '../../img/business.svg'
import mobileLogo from '../../img/mobile.svg'
import peopleLogo from '../../img/people.svg'
import rightArrow from '../../img/arrow-right-blue.png'
import first from '../../img/first.png'
import second from '../../img/second.png'
import third from '../../img/third.png'

import './styles.scss'

const historyImages = [first, second, third]

const SliderArrow = ({className, to, onClick}) => (
  <button
    type="button"
    onClick={onClick}
    className={`button button--text button--icon ${className}`}
    aria-label={to}
    style={{top: 'calc(50%)', height: '50px', width: '20px'}}
  >
    <img
      className="img-fluid"
      icon={to}
      src={rightArrow}
      style={{transform: to === 'prev' ? 'rotate(180deg)' : ''}}
    />
  </button>
)

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <SliderArrow to="prev" />,
  nextArrow: <SliderArrow to="next" />,
  initialSlide: 0,
}

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
  const [currentHover, setCurrentHover] = useState(null)
  const [fading, setFading] = useState(null)

  useEffect(() => {
    setFading(true)
    setTimeout(() => {
      setFading(false)
    }, 50)
  }, [currentNdx])

  function renderDescription() {
    const converter = new showdown.Converter()
    const html = converter.makeHtml(tabDescription)

    return html
  }

  return (
    <PageTransition>
      <SharedJumbotron
        headerImage={props.headerImage}
        title={props.mainText}
        description={props.subText}
      />

      <div className="about-page container-fluid">
        <section className="pt-5 pb-5">
          <div className="row mb-5">
            <div className="col-md-10 col-lg-8 col-11 mx-auto text-center">
              <h3 className="section-leading-text">{props.mainpitch.title}</h3>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-10 col-lg-8 col-11 mx-auto">
              <div>
                {/* <p>{props.mainpitch.description}</p> */}
                <p className="dark-grey font-size-18">
                  Snowball X is a leading online equities company utilising the latest innovative
                  technology to provide investors access to global securities listed on major Stock
                  Exchanges including Hong Kong (SEHK), New York Stock Exchange (NYSE), NASDAQ and
                  other markets. Snowball X is part of the Snowball Group which is a leading
                  financial markets social platform with over 35 million users and backed by global
                  investors such as Ant Financials (Alibaba) and Sequoia Capital.
                </p>
                {/* <p>{props.mainpitch.secondDescription}</p> */}
                <p className="dark-grey font-size-18">
                  With one account, our investors are able to access global market information and
                  trade securities listed in China, the United States, Hong Kong, Japan and other
                  countries and build a portfolio of shares of international reputable companies
                  like Alibaba, PetroChina, Microsoft and Google.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="container">
              <div className="col-lg-9 col-12 mx-auto">
                <div className="row justify-content-around">
                  {props.tabs.map((tab, ndx) => (
                    <div
                      className="col-md-3 d-flex justify-content-center align-items-center flex-column mb-5 tab-tab"
                      key={tab.title}
                      onClick={() => {
                        setTabDescription(tab.description)
                        setCurrentNdx(ndx)
                      }}
                    >
                      <div className="row w-100">
                        <div className="col-md-12 col-4 d-flex justify-content-center">
                          <div
                            onMouseEnter={() => setCurrentHover(ndx)}
                            onMouseLeave={() => setCurrentHover(null)}
                          >
                            <PreviewCompatibleImage
                              imageInfo={images[ndx]}
                              className={`mb-4 tab-img ${
                                ndx !== currentNdx && ndx !== currentHover ? 'grayscale' : ''
                              }`}
                            />
                          </div>
                        </div>
                        <div
                          className="col-md-12 col-8 d-flex align-items-center justify-content-center"
                          style={{
                            borderBottom: ndx === currentNdx ? '2px solid #006FBB' : '',
                          }}
                        >
                          <h5
                            className={
                              ndx === currentHover || ndx === currentNdx ? 'text-primary' : ''
                            }
                          >
                            {tab.title}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className={`container tab-description ${
                    fading ? 'fadeOut' : 'fadeIn'
                  } font-size-18`}
                  dangerouslySetInnerHTML={{__html: renderDescription()}}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="trade-section">
          <div className="row no-gutters h-100">
            <div className="col-md-4 img-left d-none d-md-flex" />
            <div className="col-md-4 d-flex justify-content-center align-items-center bg-primary">
              <h1 className="big-subtitle text-light" style={{fontSize: '64px'}}>
                Trade Electronically
              </h1>
            </div>
            <div className="col-md-4 img-right d-none d-md-flex" />
          </div>
        </section>

        {/* History Section */}
        <section>
          <div
            className="row justify-content-center align-items-center bg-grey"
            style={{minHeight: '60vh', padding: '40px 0'}}
          >
            <div className="container">
              <div className="col-md-12 d-flex justify-content-center mx-auto flex-column align-items-center">
                <h1 className="big-text text-primary mb-5">History</h1>

                <div className="w-100">
                  <Slider {...settings}>
                    {historyImages.map((historyItem, key, {length}) => (
                      <div className="d-flex">
                        <img
                          src={historyItem}
                          alt=""
                          style={{objectFit: 'contain'}}
                          className="img-fluid"
                        />
                        {/* {key < length - 1 && <div className="timeline-icon" />} */}
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* People Section */}
        <section className="pt-5">
          <div className="container">
            <div className="text-center mb-5">
              <h1 className="big-text text-primary">Strategic Partners</h1>
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
    </PageTransition>
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
    <Layout white footerLinks={post.frontmatter.footerLinks}>
      <AboutPageTemplate
        mainpitch={post.frontmatter.mainpitch}
        tabs={post.frontmatter.tabs}
        headerImage={post.frontmatter.headerImage}
        historyCards={post.frontmatter.historyCards}
        investors={post.frontmatter.investors}
        partners={post.frontmatter.partners}
        downloadNow={post.frontmatter.downloadNow}
        mainText={post.frontmatter.mainText}
        subText={post.frontmatter.subText}
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
        mainText
        subText
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
