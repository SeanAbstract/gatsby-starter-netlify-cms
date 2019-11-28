// @flow

import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Row, Col, Container} from 'reactstrap'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'
import Fade from 'react-reveal/Fade'
import {Controller, Scene} from 'react-scrollmagic'
import PageTransition from 'gatsby-plugin-page-transitions'
import VizSensor from 'react-visibility-sensor'

import './styles.scss'
import Layout from '../../components/Layout'
import LiveStockCarousel from '../../components/LiveStockCarousel'
import TestimonyCarousel from '../../components/TestimonyCarousel'
import DownloadNow from '../../components/DownloadNow'
import BlogRoll from '../../components/BlogRoll'
import StockSection from '../../components/StocksCarousel/stockSection'
import videoPosterSailing from '../../../static/img/bg-image-sailing.jpg'
import videoPosterChina from '../../../static/img/china-wall-poster.jpg'
import videoPosterBeach from '../../../static/img/beach-poster.jpg'
import videoPosterBoat from '../../../static/img/boat-poster.jpg'
import phoneVideo from '../../../static/img/mobile-phone-spin.mp4'
import arrowDown from '../../img/arrow-down.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FeatureCarousel from '../../components/FeatureCarousel'

type Props = {
  image: any,
  videoName: any,
  videoNameUS: any,
  videoNameAU: any,
  videoNameCN: any,
  firstSection: {
    mainText: string,
    description: string,
    buttonText: string,
    image: string,
  },
  stockSection: {
    title: string,
    backgroundImage: any,
    stocks: Array<{
      country: string,
      countryCode: string,
      financingRate: string,
      platformUsageFee: string,
      platformUsageFeeType: string,
      commission: [
        {
          price: string,
          text: string,
        }
      ],
    }>,
  },
  featureSection: {
    sections: Array<{
      mainText: string,
      subText: string,
      description: string,
    }>,
    description: string,
    buttonText: string,
    image: any,
    gifs: Array<{
      gif: any,
    }>,
  },
  blurb: {
    mainText: string,
    subText: string,
  },
  realTimeStockSection: {
    mainText: string,
    description: string,
    buttonText: string,
    stockList: Array<{
      stock: String,
      image: any,
      value: String,
      rate: String,
      percent: String,
      abbreviation: String,
    }>,
  },
  testimonials: Array<{
    customerName: string,
    customerPosition: string,
    backgroundImage: string,
    videoUrl: string,
  }>,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
}

export const IndexPageTemplate = ({
  geoCountry,
  videoName,
  videoNameUS,
  videoNameAU,
  videoNameCN,
  firstSection,
  stockSection,
  featureSection,
  blurb,
  realTimeStockSection,
  testimonials,
  downloadNow,
  mainText,
  subText,
}: Props) => {
  useEffect(() => {
    const currentVideo = document.getElementById('mainVideo')
    if (currentVideo) {
      currentVideo.play()
    }
  }, [])

  const videoRef = useRef(null)

  const hasVideo = require(`../../../static/img/${
    geoCountry === 'New Zealand'
      ? videoName
      : geoCountry === 'Australia'
      ? videoNameAU
      : geoCountry === 'United States'
      ? videoNameUS
      : geoCountry === 'China'
      ? videoNameCN
      : geoCountry === 'Not specified'
      ? videoName
      : videoName
  }`)

  return (
    <PageTransition>
      {/* Hero Video */}
      {hasVideo && (
        <Jumbotron className="full-width-image-container d-flex justify-content-center align-items-center flex-column text-right">
          <ImageContainer>
            <StyledVideo
              id="mainVideo"
              loop
              width="100%"
              muted="true"
              preload="auto"
              // src={require(`../../../static/img/${videoName}`)}
              src={require(`../../../static/img/${
                geoCountry === 'New Zealand'
                  ? videoName
                  : geoCountry === 'Australia'
                  ? videoNameAU
                  : geoCountry === 'United States'
                  ? videoNameUS
                  : geoCountry === 'China'
                  ? videoNameCN
                  : geoCountry === 'Not specified'
                  ? videoName
                  : videoName
              }`)}
              autoplay
              className="video"
              poster={
                geoCountry === 'New Zealand'
                  ? videoPosterSailing
                  : geoCountry === 'Australia'
                  ? videoPosterBeach
                  : geoCountry === 'United States'
                  ? videoPosterBoat
                  : geoCountry === 'China'
                  ? videoPosterChina
                  : geoCountry === 'Not specified'
                  ? videoPosterSailing
                  : videoPosterSailing
              }
            >
              <track kind="captions" />
            </StyledVideo>
            <Overlay />
          </ImageContainer>
          <div className="text-center mb-5 pb-5">
            <h1 className="big-text">{mainText}</h1>
            <h3 className="big-subtitle subtitle-text-align text-primary">{subText}</h3>
          </div>

          <a href="#fast-secure-trusted">
            <img
              src={arrowDown}
              alt=""
              style={{bottom: '60px', height: '25px', position: 'absolute'}}
            />
          </a>
        </Jumbotron>
      )}
      <div
        className="landing-page"
        style={{zIndex: 2, background: 'white'}}
        id="fast-secure-trusted"
      >
        {/* Fast Secure Trusted or Second */}
        <Container fluid className="second-section">
          <Row className="justify-content-center h-100">
            <Col md={5} lg={3} className="left-text-col">
              <Fade bottom>
                <h1 className="text-primary display-2 mb-3">{firstSection.mainText}</h1>
                <p className="dark-grey font-size-18">{firstSection.description}</p>
                <div>
                  <Link to="/download">
                    <button className="btn btn-outline-primary rounded-pill px-4" type="button">
                      {firstSection.buttonText}
                    </button>
                  </Link>
                </div>
              </Fade>
            </Col>
            <div className="col-md-3 d-none d-md-flex align-items-center">
              <Fade bottom>
                <VizSensor
                  partialVisibility
                  onChange={isVisible => {
                    if (isVisible) {
                      videoRef.current.play()
                    }
                  }}
                >
                  <video
                    src={phoneVideo}
                    style={{maxWidth: '300px'}}
                    id="phoneVideo"
                    muted="true"
                    preload="auto"
                    ref={videoRef}
                  />
                </VizSensor>
              </Fade>
            </div>
          </Row>
        </Container>
        {/* Stock Section or Third */}
        <section className="">
          <StockRow className="h-100 stock-section no-gutters">
            <Col md={6} xs={12} style={{backgroundColor: '#006fbb'}}>
              <Controller>
                <div id="section-trigger" />
                <Scene
                  triggerElement="#section-trigger"
                  duration={1600}
                  triggerHook={0}
                  offset={325 * (stockSection.stocks.length / 2)}
                  classToggle="background-two"
                >
                  <div
                    className="d-flex flex-column justify-content-center align-items-center stock-section-background"
                    style={{
                      position: 'sticky',
                      top: 0,
                    }}
                  >
                    <div className="title-container">
                      <h1 className="display-2 mb-3 ml-5 special-max-width">
                        {stockSection.title}
                      </h1>
                    </div>
                  </div>
                </Scene>
              </Controller>
            </Col>
            <Col md={6} xs={12} style={{backgroundColor: '#006fbb'}}>
              <div id="section-trigger" />
              <Controller>
                {stockSection.stocks.map((stock, key) => {
                  const {
                    country,
                    countryCode,
                    commission,
                    financingRate,
                    platformUsageFee,
                    platformUsageFeeType,
                  } = stock
                  const styleDiv = {height: '50vh'}
                  let stockClassName = 'd-flex flex-column justify-content-center stock-detail'
                  let classToggle = 'fade-in'
                  let mult = key
                  let duration = 300
                  if (key === 0) {
                    styleDiv.marginTop = '25vh'
                    classToggle = 'fade-out'
                    stockClassName += ' first'
                    mult = 1
                  } else if (key + 1 === stockSection.stocks.length) {
                    styleDiv.marginBottom = '25vh'
                    duration = 600
                  }

                  const packageType =
                    key <= 2 ? 'Low Commission Package' : 'Low Interest Rate Package'

                  if (window.innerWidth < 578) {
                    styleDiv.height = '70vh'

                    return (
                      <Scene
                        triggerElement="#section-trigger"
                        duration={300}
                        triggerHook={0}
                        offset={600 * mult}
                        classToggle={classToggle}
                        key={`stock-key:${key}`}
                      >
                        <div className={stockClassName} style={styleDiv}>
                          <StockSection
                            currency={countryCode}
                            stockName={country}
                            commission={commission}
                            financingRate={financingRate}
                            platformUsageFee={platformUsageFee}
                            platformUsageFeeType={`${platformUsageFeeType} (platform usage fee)`}
                            packageType={packageType}
                          />
                        </div>
                      </Scene>
                    )
                  }

                  return (
                    <Scene
                      triggerElement="#section-trigger"
                      duration={duration}
                      triggerHook={0}
                      offset={350 * mult}
                      classToggle={classToggle}
                      key={`stock-key:${key}`}
                    >
                      <div className={stockClassName} style={styleDiv}>
                        <StockSection
                          currency={countryCode}
                          stockName={country}
                          commission={commission}
                          financingRate={financingRate}
                          platformUsageFee={platformUsageFee}
                          platformUsageFeeType={`${platformUsageFeeType} (platform usage fee)`}
                          packageType={packageType}
                        />
                      </div>
                    </Scene>
                  )
                })}
              </Controller>
            </Col>
          </StockRow>
        </section>

        {/* Make Informed Decisions or 4th */}
        <section className="feature-section container-fluid d-flex justify-content-center">
          <div id="information-trigger" />
          <div className="row justify-content-around h-100">
            <div className="col-md-4 ml-auto d-none d-md-block">
              <div className="info-phone-container">
                  <Controller>
                    <Scene
                      triggerElement="#information-trigger"
                      duration={900}
                      triggerHook={0}
                      offset={0}
                      classToggle="frame-one"
                    >
                      <div className="phone-frame" />
                    </Scene>
                    <Scene
                      triggerElement="#information-trigger"
                      duration={800}
                      triggerHook={0}
                      offset={900}
                      classToggle="frame-two"
                    >
                      <div className="phone-frame" />
                    </Scene>
                    <Scene
                      triggerElement="#information-trigger"
                      duration={1500}
                      triggerHook={0}
                      offset={1700}
                      classToggle="frame-three"
                    >
                      <div className="phone-frame" />
                    </Scene>
                    <Scene
                      triggerElement="#information-trigger"
                      duration={900}
                      triggerHook={0}
                      offset={0}
                      classToggle="phone-display"
                    >
                      <div className="display-div" />
                    </Scene>
                    <Scene
                      triggerElement="#information-trigger"
                      duration={800}
                      triggerHook={0}
                      offset={900}
                      classToggle="phone-display-one"
                    >
                      <div className="display-div" />
                    </Scene>
                    <Scene
                      triggerElement="#information-trigger"
                      duration={1500}
                      triggerHook={0}
                      offset={1700}
                      classToggle="phone-display-two"
                    >
                      <div className="display-div" />
                    </Scene>
                  </Controller>
              </div>
            </div>
            <div className="col-md-4 mr-auto ml-3">
              <Controller>
                {featureSection.sections.map((section, ndx) => (
                  <Scene duration={400} pin triggerHook={0} key={`featureSection-sections-${ndx}`}>
                    <div
                      className="d-flex flex-column justify-content-center"
                      style={{height: '100vh'}}
                    >
                      {ndx === 0 && (
                        <h1 className="text-primary display-2 mb-3">{section.mainText}</h1>
                      )}
                      <h5 className="mb-0" style={{fontSize: '28px'}}>
                        {section.subText}
                      </h5>
                      <p className="dark-grey font-size-18">{section.description}</p>
                      <Link to="/how-it-works">
                        <button className="btn btn-outline-primary rounded-pill px-4" type="button">
                          {featureSection.buttonText}
                        </button>
                      </Link>
                    </div>
                  </Scene>
                ))}
              </Controller>
            </div>
          </div>
        </section>

        <div className="carousel slide feature-carousel-container" data-ride="carousel">
          <FeatureCarousel section={featureSection} />
        </div>

        {/* Get ahead or 5th */}
        <div className="d-flex flex-column get-ahead-section justify-content-center align-items-center bg-primary">
          <h1 className="display-3" style={{lineHeight: '0.5'}}>
            {blurb.mainText}
          </h1>
          <h3 className="big-subtitle">{blurb.subText}</h3>
        </div>
        {/* Blog Roll or 6th */}
        <div className="blog-roll-container py-3 container-fluid">
          <Fade bottom cascade>
            <div className="row">
              <div className="col-sm-8 mx-auto">
                <BlogRoll />
              </div>
            </div>
          </Fade>
        </div>
        {/* Second Feature Section or 7th */}
        <section className="row another-feature-section bg-grey row-fix">
          <div className="container">
            <div className="row justify-content-around align-items-center h-100">
              <Col md={5} lg={4} className="ml-auto">
                <Fade bottom>
                  <h1 className="text-primary display-2 mb-3">{realTimeStockSection.mainText}</h1>
                  <p className="font-size-18 dark-grey">{realTimeStockSection.description}</p>
                  <Link to="/price">
                    <button className="btn btn-outline-primary rounded-pill px-4" type="button">
                      {realTimeStockSection.buttonText}
                    </button>
                  </Link>
                </Fade>
              </Col>
              <Col md={6} lg={6} className="mr-auto">
                <Fade bottom cascade>
                  <Row noGutters>
                    <LiveStockCarousel stocks={realTimeStockSection.stockList} />
                  </Row>
                </Fade>
              </Col>
            </div>
          </div>
        </section>
        {/* Carousel */}
        <div className="carousel slide carousel-container" data-ride="carousel">
          <TestimonyCarousel testimonials={testimonials} />
        </div>
        {/* Download NOw */}

        <DownloadNow
          mainText={downloadNow.mainText}
          subText={downloadNow.subText}
          image={downloadNow.image}
        />
      </div>
    </PageTransition>
  )
}

class IndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }

  state = {
    loading: true,
    geoCountry: null,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 1000)

    // Geo location checker - Used for swapping homepage header video
    fetch('/locale.json')
      .then(response => response.json())
      .then(data => this.setState({geoCountry: data.locale}))
      .catch(err => console.error('Error fetching data from /locale.json endpoint', err))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeMethod)
  }

  shouldUseWhiteLogo = () => !(this.state.geoCountry === 'New Zealand' || 'Not specified')

  render() {
    const {frontmatter} = this.props.data.markdownRemark

    if (this.state.loading) {
      return (
        <div style={{height: '100vh'}} className="d-flex justify-content-center align-items-center">
          <div className="spinner" />
        </div>
      )
    }

    // if (this.state.useMobileView) {
    //   return <MobileIndex testimonials={frontmatter.testimonials} />
    // }

    return (
      <Layout white={this.shouldUseWhiteLogo()} stickyFooter footerLinks={frontmatter.footerLinks}>
        <meta name="robots" content="noindex" />
        <IndexPageTemplate
          geoCountry={this.state.geoCountry}
          videoName={frontmatter.videoName}
          videoNameUS={frontmatter.videoNameUS}
          videoNameAU={frontmatter.videoNameAU}
          videoNameCN={frontmatter.videoNameCN}
          image={frontmatter.image}
          firstSection={frontmatter.firstSection}
          stockSection={frontmatter.stockSection}
          featureSection={frontmatter.featureSection}
          blurb={frontmatter.blurb}
          realTimeStockSection={frontmatter.realTimeStockSection}
          testimonials={frontmatter.testimonials}
          downloadNow={frontmatter.downloadNow}
          mainText={frontmatter.mainText}
          subText={frontmatter.subText}
        />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        mainText
        subText
        videoName
        videoNameUS
        videoNameAU
        videoNameCN
        firstSection {
          mainText
          description
          buttonText
          image {
            childImageSharp {
              fluid(maxWidth: 750, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        stockSection {
          title
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          stocks {
            country
            countryCode
            financingRate
            platformUsageFee
            platformUsageFeeType
            commission {
              price
              text
            }
          }
        }
        featureSection {
          sections {
            mainText
            subText
            description
          }
          description
          buttonText
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          gifs {
            gif
          }
        }
        blurb {
          mainText
          subText
        }
        realTimeStockSection {
          mainText
          description
          buttonText
          stockList {
            stock
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            value
            rate
            percent
            abbreviation
            bgColor
          }
        }
        testimonials {
          customerName
          customerPosition
          video {
            publicURL
          }
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 1400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        downloadNow {
          mainText
          subText
          image {
            childImageSharp {
              fluid(maxWidth: 750, quality: 100) {
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

const WordTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.75rem;

  font-size: 3rem;

  @media (min-width: 576px) {
    font-size: 2.75rem;
  }

  @media (min-width: 768px) {
    font-size: 3.75rem;
    line-height: 2.5rem;
  }

  @media (min-width: 992px) {
    font-size: 4rem;
    line-height: 2.65rem;
  }

  @media (min-width: 1200px) {
    font-size: 5rem;
    line-height: 3.25rem;
  }
`

const StockRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  .section {
    height: 100vh;
  }

  .tween {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 0 !important;
    position: relative;
    left: calc(50% - 50px);
  }

  .stagger {
    width: 50px;
    height: 50px;
    left: 700px;
    background-color: green;
    position: relative;
  }
`

const Jumbotron = styled.div`
  height: 100vh !important;
  width: 100%;
  top: 0;
  position: fixed !important;
  z-index: -1;
  background-color: grey;
`

const ImageContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  background: grey;
`

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const StyledVideo = styled.video`
  position: absolute;
  right: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  z-index: -1;
`
