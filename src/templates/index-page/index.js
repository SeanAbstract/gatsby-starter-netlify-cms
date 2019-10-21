// @type

import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'

import './styles.scss'
import Layout from '../../components/Layout'
import SharedJumbotron from '../../components/SharedJumbotron'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import StocksCarousel from '../../components/StocksCarousel'
import facebookLogo from '../../../static/img/home-jumbotron.jpg'
import TestimonyCarousel from '../../components/TestimonyCarousel'
import DownloadNow from '../../components/DownloadNow'
import BlogRoll from '../../components/BlogRoll'

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
  },
  blurb: {
    mainText: string,
    subText: string,
  },
  realTimeStockSection: {
    mainText: string,
    description: string,
    buttonText: string,
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

    {/* Fast Secure Trusted */}
    <div className="second-section">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <h1 className="text-primary display-2 mb-3">{firstSection.mainText}</h1>
          <p>{firstSection.description}</p>
          <button className="btn btn-outline-primary rounded-pill " type="button">
            {firstSection.buttonText}
          </button>
        </div>
        <div className="col-md-3">
          <PreviewCompatibleImage imageInfo={firstSection.image} style={{maxWidth: '250px'}} />
        </div>
      </div>
    </div>

    {/* Stock Section */}
    <div className="row no-gutters stock-section">
      <div
        className="col-md-6 mx-auto"
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
      </div>
      <div className="col-md-6 mx-auto d-flex justify-content-center align-items-center bg-primary">
        <div className="container ml-5 text-light">
          <StocksCarousel stocks={stockSection.stocks} />
        </div>
      </div>
    </div>

    {/* Make Informed Decisions */}
    <div className="row feature-section justify-content-around align-items-center">
      <div className="col-md-3 ml-auto">
        <PreviewCompatibleImage imageInfo={featureSection.image} style={{maxWidth: '250px'}} />
      </div>
      {/* <div className="col-md-1" /> */}
      <div className="col-md-3 mr-auto ml-3">
        <h1 className="text-primary display-2 mb-3">{featureSection.mainText}</h1>
        <h5 className="mb-2">{featureSection.subText}</h5>
        <p>{featureSection.description}</p>
        <button className="btn btn-outline-primary rounded-pill" type="button">
          {featureSection.buttonText}
        </button>
      </div>
    </div>

    {/* Get ahead */}
    <div className="d-flex flex-column get-ahead-section justify-content-center align-items-center bg-primary">
      <h1 className="display-3" style={{lineHeight: '0.5'}}>
        {blurb.mainText}
      </h1>
      <h3 className="big-subtitle">{blurb.subText}</h3>
    </div>

    {/* Blog Roll  */}
    <div className="blog-roll-container container py-3">
      <BlogRoll />
    </div>

    {/* Second Feature Section */}
    <div className="row feature-section justify-content-around align-items-center bg-grey">
      <div className="col-md-4 ml-auto">
        <h1 className="text-primary display-2 mb-3">{realTimeStockSection.mainText}</h1>
        <p>{realTimeStockSection.description}</p>
        <button className="btn btn-outline-primary rounded-pill" type="button">
          {realTimeStockSection.buttonText}
        </button>
      </div>
      <div className="col-md-5 mr-auto">
        <div className="row w-100 no-gutters">
          {[1, 2, 3].map(num => (
            <div className="col" style={{marginRight: '5px'}}>
              <div className="card rounded-0">
                <div className="card-img-container" style={{flex: 1}}>
                  <img
                    src={facebookLogo}
                    className="card-img-top"
                    alt=""
                    style={{height: '250px'}}
                  />
                </div>
                <div className="card-body py-2" style={{flex: 0.3}}>
                  <div className="row justify-content-around">
                    <h5 className="mt-1">FB</h5>
                    <div>
                      <h3 className="mb-1">1821.5</h3>
                      <p className="text-success">0.95 (0.05%)</p>
                    </div>
                  </div>
                  <small className="text-muted">Facebook</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

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
        }
        blurb {
          mainText
          subText
        }
        realTimeStockSection {
          mainText
          description
          buttonText
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
