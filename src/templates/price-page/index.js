/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React, {useState} from 'react'
import {graphql} from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'

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
    <PageTransition>
      <div className="price-page">
        <SharedJumbotron {...jumbotron} />

        <section>
          <div className="container py-5">
            <div className="row pricing-tables">
              <div className="col-md-10 mx-auto text-center">
                <h3 className="section-leading-text mb-5">{mainPitch}</h3>

                <div className="row">
                  <div className="col-md-6 d-flex flex-column mb-3">
                    <div
                      onClick={() => setCurrentPackage('lowCommissionPackage')}
                      className={`price-page-h4-wrapper text-center package ${
                        currentPackage === 'lowCommissionPackage' ? 'text-primary' : ''
                      } mb-4`}
                      style={{
                        borderBottom:
                          currentPackage === 'lowCommissionPackage' ? '2px solid #006FBB' : '',
                      }}
                    >
                      <h4>Low Comission Package</h4>
                    </div>
                    <div className="pb-3" />
                    <div className="card">
                      <div className="card-type-top">HK$</div>
                      <img
                        className="card-img-top"
                        width="100%"
                        height="72px"
                        src={hkd}
                        alt="Card cap"
                        style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
                      />
                      <div className="card-body">
                        <div className="row justify-content-between align-items-center text-right">
                          <div className="col-4">
                            <h5>{packages[currentPackage].hk.commission.title}</h5>
                          </div>
                          <div className="col-8">
                            <p className="mb-0">
                              No Commission on orders below HKD{' '}
                              {currentPackage === 'lowCommissionPackage' ? '60,000' : '22,000'}{' '}
                            </p>
                            <p className="mb-0">
                              Pay <strong className="text-primary">0.03%</strong> per share on
                              orders above{' '}
                              {currentPackage === 'lowCommissionPackage' ? '60,000' : '22,000'} HKD
                            </p>
                          </div>
                        </div>
                        <div className="price-page-sep my-3" />
                        <div className="row justify-content-between align-items-center">
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
                        <div className="price-page-sep my-3" />
                        <div className="row justify-content-between align-items-center">
                          <div className="col-6">
                            <h5 className="mb-0">
                              {packages[currentPackage].hk.financingInterestRate.title}
                            </h5>
                          </div>
                          <p className="col-5 text-right">
                            <strong className="text-primary">
                              {currentPackage === 'lowCommissionPackage' ? '3.983% ' : '4.169%'}
                            </strong>{' '}
                            minimum
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div
                      onClick={() => setCurrentPackage('lowInterestRatePackage')}
                      className={`price-page-h4-wrapper text-center mb-4 package ${
                        currentPackage === 'lowInterestRatePackage' ? 'text-primary' : ''
                      }`}
                      style={{
                        borderBottom:
                          currentPackage === 'lowInterestRatePackage' ? '2px solid #006FBB' : '',
                      }}
                    >
                      <h4>Low Interest Rate Package</h4>
                    </div>
                    <div className="pb-3" />
                    <div className="card">
                      <div className="card-type-top">US$</div>
                      <img
                        className="card-img-top"
                        width="100%"
                        height="72px"
                        src={usd}
                        alt="Card cap"
                        style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}
                      />
                      <div className="card-body">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-4">
                            <h5>{packages[currentPackage].hk.commission.title}</h5>
                          </div>
                          <div className="col-8 text-right">
                            <p className="mb-0">
                              <strong className="text-primary">
                                {currentPackage === 'lowCommissionPackage' ? '0.002' : '0.008'}
                              </strong>{' '}
                              per share
                              <br />
                              <strong className="text-primary">$0.99</strong> per deal minimum
                            </p>
                          </div>
                        </div>
                        <div className="price-page-sep my-3" />
                        <div className="row justify-content-between align-items-center">
                          <div className="col-6">
                            <h5 className="mb-0">
                              {packages[currentPackage].hk.platformUsageFee.title}
                            </h5>
                          </div>
                          <div className="col-6 text-right">
                            <p className="mb-0">
                              <strong className="text-primary">$0.003</strong> per share
                              <br />
                              <strong className="text-primary">$1</strong> per deal{' '}
                              {currentPackage === 'lowCommissionPackage' ? 'the' : ''} minimum
                            </p>
                          </div>
                        </div>
                        <div className="price-page-sep my-3" />
                        <div className="row justify-content-between align-items-center">
                          <div className="col-6">
                            <h5 className="mb-0">
                              {packages[currentPackage].hk.financingInterestRate.title}
                            </h5>
                          </div>
                          <p className="col-5 text-right">
                            <strong className="text-primary">
                              {currentPackage === 'lowCommissionPackage' ? '4.2%' : '1.85%'}
                            </strong>{' '}
                            minimum
                          </p>
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
    </PageTransition>
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
