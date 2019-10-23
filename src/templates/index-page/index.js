// @type

import React from 'react'
import {Row, Col, Container} from 'reactstrap'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import Fade from 'react-reveal/Fade'

import './styles.scss'
import Layout from '../../components/Layout'
import SharedJumbotron from '../../components/SharedJumbotron'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import StocksCarousel from '../../components/StocksCarousel'
import LiveStockCarousel from '../../components/LiveStockCarousel'
import introPhone from '../../img/snowball-intro-phone.gif'
import TestimonyCarousel from '../../components/TestimonyCarousel'
import DownloadNow from '../../components/DownloadNow'
import BlogRoll from '../../components/BlogRoll'
import StockCard from '../../components/StockCard'

type Props = {
  image: any,
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
      commission: [
        {
          price: string,
          text: string,
        }
      ],
    }>,
  },
  featureSection: {
    mainText: string,
    subText: string,
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
  image,
  firstSection,
  stockSection,
  featureSection,
  blurb,
  realTimeStockSection,
  testimonials,
  downloadNow,
}: Props) => (
  <div className="landing-page">
    {/* Hero Video */}
    <SharedJumbotron
      title="Global Markets"
      description="at your fingertips"
      headerImage={image}
      size="lg"
      secondaryColor="primary"
    />

    {/* Fast Secure Trusted or Second */}
    <Container className="second-section">
      <Row className="justify-content-center">
        <Col md={5} lg={4} className="left-text-col">
          <Fade bottom>
            <h1 className="text-primary display-2 mb-3">{firstSection.mainText}</h1>
            <p>{firstSection.description}</p>
            <div>
              <button className="btn btn-outline-primary rounded-pill " type="button">
                {firstSection.buttonText}
              </button>
            </div>
          </Fade>
        </Col>
        <div className="col-md-3 d-none d-md-block">
          <Fade bottom>
            <img src={introPhone} style={{maxWidth: '300px'}} alt="snowball_intro_phone" />
          </Fade>
        </div>
      </Row>
    </Container>

    {/* Stock Section or Third */}
    <Row noGutters className="stock-section">
      <Col
        md={6}
        xs={12}
        className="mx-auto"
        style={{
          backgroundImage: `url(${
            stockSection.backgroundImage.childImageSharp
              ? stockSection.backgroundImage.childImageSharp.fluid.src
              : stockSection.backgroundImage
          })`,
          backgroundSize: 'cover%',
        }}
      >
        <div className="container d-flex align-items-center h-100 w-50 ml-auto">
          <h1 className="display-3 mb-3">{stockSection.title}</h1>
        </div>
      </Col>
      <Col
        md={6}
        xs={12}
        style={{backgroundColor: '#006fbb'}}
        className="justify-content-center d-flex align-items-center m-md-0 col-right"
      >
        <StocksCarousel stocks={stockSection.stocks} />
      </Col>
    </Row>

    {/* Make Informed Decisions or 4th */}
    <div className="row feature-section justify-content-around align-items-center">
      <div className="col-md-3 ml-auto d-none d-md-block">
        <PreviewCompatibleImage imageInfo={featureSection.image} style={{maxWidth: '250px'}} />
      </div>
      {/* <div className="col-md-1" /> */}
      <div className="col-md-3 mr-auto ml-3">
        <Fade bottom>
          <h1 className="text-primary display-2 mb-3">{featureSection.mainText}</h1>
          <h5 className="mb-2">{featureSection.subText}</h5>
          <p>{featureSection.description}</p>
          <button className="btn btn-outline-primary rounded-pill" type="button">
            {featureSection.buttonText}
          </button>
        </Fade>
      </div>
    </div>

    {/* Get ahead or 5th */}
    <div className="d-flex flex-column get-ahead-section justify-content-center align-items-center bg-primary">
      <h1 className="display-3" style={{lineHeight: '0.5'}}>
        {blurb.mainText}
      </h1>
      <h3 className="big-subtitle">{blurb.subText}</h3>
    </div>

    {/* Blog Roll or 6th */}
    <div className="blog-roll-container container py-3">
      <Fade bottom cascade>
        <BlogRoll />
      </Fade>
    </div>

    {/* Second Feature Section or 7th */}
    <div className="row feature-section justify-content-around align-items-center bg-grey">
      <Col md={5} lg={3} className="ml-auto">
        <Fade bottom>
          <h1 className="text-primary display-2 mb-3">{realTimeStockSection.mainText}</h1>
          <p>{realTimeStockSection.description}</p>
          <button className="btn btn-outline-primary rounded-pill" type="button">
            {realTimeStockSection.buttonText}
          </button>
        </Fade>
      </Col>
      <Col md={6} lg={5} className="mr-auto">
        <Fade bottom cascade>
          <Row noGutters>
            <LiveStockCarousel stocks={realTimeStockSection.stockList} />
          </Row>
        </Fade>
      </Col>
    </div>

    {/* Carousel */}
    <div className="carousel slide carousel-container" data-ride="carousel">
      <TestimonyCarousel testimonials={testimonials} />
    </div>

    {/* Download NOw */}
    <Fade bottom>
      <DownloadNow
        mainText={downloadNow.mainText}
        subText={downloadNow.subText}
        image={downloadNow.image}
      />
    </Fade>
  </div>
)

const IndexPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  console.log(frontmatter)

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        firstSection={frontmatter.firstSection}
        stockSection={frontmatter.stockSection}
        featureSection={frontmatter.featureSection}
        blurb={frontmatter.blurb}
        realTimeStockSection={frontmatter.realTimeStockSection}
        testimonials={frontmatter.testimonials}
        downloadNow={frontmatter.downloadNow}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        firstSection {
          mainText
          description
          buttonText
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        stockSection {
          title
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          stocks {
            country
            countryCode
            commission {
              price
              text
            }
          }
        }
        featureSection {
          mainText
          subText
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
          }
        }
        testimonials {
          customerName
          customerPosition
          videoUrl
          backgroundImage {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 100) {
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
