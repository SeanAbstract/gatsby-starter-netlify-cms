/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React, {useState} from 'react'
import {graphql} from 'gatsby'

import './styles.scss'
import Layout from '../../components/Layout'
import SharedJumbotron from '../../components/SharedJumbotron'
import DownloadNow from '../../components/DownloadNow'
import hkd from '../../img/hkd.png'
import usd from '../../img/usd.png'

type Props = {
  jumbotron: {
    title: string,
    description: string,
    headerImage: any,
  },
  mainPitch: string,
  lowCommissionPackage: {
    us: {
      commission: {
        title: string,
        description: string,
      },
      platformUsageFee: {
        title: string,
        description: string,
      },
      financingInterestRate: {
        title: string,
        description: string,
      },
    },
    hk: {
      commission: {
        title: string,
        description: string,
      },
      platformUsageFee: {
        title: string,
        description: string,
      },
      financingInterestRate: {
        title: string,
        description: string,
      },
    },
  },
  lowInterestRatePackage: {
    us: {
      commission: {
        title: string,
        description: string,
      },
      platformUsageFee: {
        title: string,
        description: string,
      },
      financingInterestRate: {
        title: string,
        description: string,
      },
    },
    hk: {
      commission: {
        title: string,
        description: string,
      },
      platformUsageFee: {
        title: string,
        description: string,
      },
      financingInterestRate: {
        title: string,
        description: string,
      },
    },
  },
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
}

export function PricePageTemplate({
  jumbotron,
  mainPitch,
  lowCommissionPackage,
  lowInterestRatePackage,
  downloadNow,
}: Props) {
  const [currentPackage, setCurrentPackage] = useState('lowCommissionPackage')

  const packages = {
    lowCommissionPackage,
    lowInterestRatePackage,
  }

  return (
    <div className="price-page">
      <SharedJumbotron {...jumbotron} />

      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-10 mx-auto text-center">
              <h3 className="section-leading-text mb-5">{mainPitch}</h3>

              <div className="row">
                <div className="col-md-6 d-flex flex-column mb-3">
                  <div
                    onClick={() => setCurrentPackage('lowCommissionPackage')}
                    className="price-page-h4-wrapper text-center text-primary pb-2 mb-3"
                    style={{borderBottom: '2px solid #006FBB'}}
                  >
                    <h4>Low Comission Package</h4>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      width="100%"
                      height="72px"
                      src={hkd}
                      alt="Card cap"
                      style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
                    />
                    <div className="card-body">
                      <div className="row justify-content-between align-items-center mb-3 text-right">
                        <div className="col-4">
                          <h5>{packages[currentPackage].hk.commission.title}</h5>
                        </div>
                        <div className="col-8">
                          {/* <p className="mb-0">
                            {packages[currentPackage].hk.commission.description}
                          </h5> */}
                          <small className="mb-0">No Commission on orders below HKD 60,000</small>
                          <small className="mb-0">
                            Pay <strong className="text-primary">0.03%</strong> per share on orders
                            above 60,000 HKD
                          </small>
                        </div>
                      </div>
                      <div className="row justify-content-between align-items-center mb-3">
                        <div className="col-6">
                          <h5 className="mb-0">
                            {packages[currentPackage].hk.platformUsageFee.title}
                          </h5>
                        </div>
                        <hr />
                        <div className="col-4">
                          <p className="mb-0 text-right">
                            <strong className="text-primary">HKD 18</strong> per deal
                          </p>
                        </div>
                      </div>
                      <div className="row justify-content-between align-items-center">
                        <div className="col-6">
                          <h5 className="mb-0">
                            {packages[currentPackage].hk.financingInterestRate.title}
                          </h5>
                        </div>
                        <div className="col-5 text-right">
                          <p>3.983% minimum</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    onClick={() => setCurrentPackage('lowInterestRatePackage')}
                    className="price-page-h4-wrapper text-center pb-2 mb-3"
                  >
                    <h4>Low Comission Package</h4>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top"
                      width="100%"
                      height="72px"
                      src={usd}
                      alt="Card cap"
                      style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
                    />
                    <div className="card-body">
                      <div className="row justify-content-between align-items-center mb-3">
                        <div className="col-4">
                          <h5>{packages[currentPackage].hk.commission.title}</h5>
                        </div>
                        <div className="col-8 text-right">
                          {/* <p className="mb-0">
                            {packages[currentPackage].hk.commission.description}
                          </h5> */}
                          <p className="mb-0">No Commission on orders below HKD 60,000</p>
                          <small className="mb-0" style={{fontSize: '8px'}}>
                            Pay <strong className="text-primary">0.03% </strong> per share on orders
                            above 60,000 HKD
                          </small>
                        </div>
                      </div>
                      <div className="row justify-content-between align-items-center mb-3">
                        <div className="col-6">
                          <h5 className="mb-0">
                            {packages[currentPackage].hk.platformUsageFee.title}
                          </h5>
                        </div>
                        <div className="col-4 text-right">
                          <p className="mb-0">
                            <strong className="text-primary">HKD 18</strong> per deal
                          </p>
                        </div>
                      </div>
                      <div className="row justify-content-between align-items-center">
                        <div className="col-6">
                          <h5 className="mb-0">
                            {packages[currentPackage].hk.financingInterestRate.title}
                          </h5>
                        </div>
                        <div className="col-5 text-right">
                          <p>3.983% minimum</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <DownloadNow {...downloadNow} />
      </section>
    </div>
  )
}

function PricePage({data}) {
  const {markdownRemark: price} = data

  console.log(price)

  return (
    <Layout white>
      <PricePageTemplate
        jumbotron={price.frontmatter.jumbotron}
        mainPitch={price.frontmatter.mainPitch}
        lowCommissionPackage={price.frontmatter.lowCommissionPackage}
        lowInterestRatePackage={price.frontmatter.lowInterestRatePackage}
        downloadNow={price.frontmatter.downloadNow}
      />
    </Layout>
  )
}

export const pricePageQuery = graphql`
  query PricePage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        jumbotron {
          title
          description
          headerImage {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        mainPitch
        lowCommissionPackage {
          us {
            commission {
              title
              description
            }
            platformUsageFee {
              title
              description
            }
            financingInterestRate {
              title
              description
            }
          }
          hk {
            commission {
              title
              description
            }
            platformUsageFee {
              title
              description
            }
            financingInterestRate {
              title
              description
            }
          }
        }
        lowInterestRatePackage {
          us {
            commission {
              title
              description
            }
            platformUsageFee {
              title
              description
            }
            financingInterestRate {
              title
              description
            }
          }
          hk {
            commission {
              title
              description
            }
            platformUsageFee {
              title
              description
            }
            financingInterestRate {
              title
              description
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

export default PricePage
