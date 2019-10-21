// @flow
import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../../components/Layout'
import SharedJumbotron from '../../components/SharedJumbotron'

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
}

export function PricePageTemplate({
  jumbotron,
  mainPitch,
  lowCommissionPackage,
  lowInterestRatePackage,
}: Props) {
  return (
    <div>
      <SharedJumbotron {...jumbotron} />

      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h3 className="section-leading-text">{mainPitch}</h3>

              <div className="row">
                <div className="col-md-6">
                  <h3>Low Comission Package</h3>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <h5>{lowCommissionPackage.hk.commission.title}</h5>
                        <p>{lowCommissionPackage.hk.commission.description}</p>
                      </div>
                      <div className="row">
                        <h5>{lowCommissionPackage.hk.platformUsageFee.title}</h5>
                        <p>{lowCommissionPackage.hk.platformUsageFee.description}</p>
                      </div>
                      <div className="row">
                        <h5>{lowCommissionPackage.hk.financingInterestRate.title}</h5>
                        <p>{lowCommissionPackage.hk.financingInterestRate.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <h3>Low Interest Rate Package</h3>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <h5>{lowInterestRatePackage.us.commission.title}</h5>
                        <p>{lowInterestRatePackage.us.commission.description}</p>
                      </div>
                      <div className="row">
                        <h5>{lowInterestRatePackage.us.platformUsageFee.title}</h5>
                        <p>{lowInterestRatePackage.us.platformUsageFee.description}</p>
                      </div>
                      <div className="row">
                        <h5>{lowInterestRatePackage.us.financingInterestRate.title}</h5>
                        <p>{lowInterestRatePackage.us.financingInterestRate.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function PricePage({data}) {
  const {markdownRemark: price} = data

  console.log(price)

  return (
    <Layout>
      <PricePageTemplate
        jumbotron={price.frontmatter.jumbotron}
        mainPitch={price.frontmatter.mainPitch}
        lowCommissionPackage={price.frontmatter.lowCommissionPackage}
        lowInterestRatePackage={price.frontmatter.lowInterestRatePackage}
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
      }
    }
  }
`

export default PricePage
