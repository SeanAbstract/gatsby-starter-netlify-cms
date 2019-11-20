// @flow
import React from 'react'
import {graphql} from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'

import DownloadNow from '../../components/DownloadNow'
import Layout from '../../components/Layout'
import SharedJumbotron from '../../components/SharedJumbotron'
import './styles.scss'
import facebookIcon from '../../img/facebook.png'
import linkedinIcon from '../../img/linkedin.png'
import twitterIcon from '../../img/twitter.png'
import wechatIcon from '../../img/wechat.png'
import googleMaps from '../../img/google-maps.png'

type Props = {
  headerImage: any,
  informationSection: {
    customerServiceTitle: string,
    customerServiceContacts: Array<{
      title: string,
      subtitle: string,
      hours: string,
      phoneNumber: string,
    }>,
    offices: Array<{
      officeName: string,
      address: string,
    }>,
    imageRight: any,
  },
  socialMedia: {
    socialMediaTitle: string,
    wechatAccountOne: string,
    wechatAccountTwo: string,
  },
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
}

function ContactPageTemplate(props: Props) {
  return (
    <PageTransition>
      <div className="contact-page">
        <SharedJumbotron
          headerImage={props.headerImage}
          title="Contact"
          description="Here to help"
        />

        <section className="customer-service-section container-fluid py-5">
          <div className="row h-100">
            <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
              <div className="row w-100 pl-5">
                <div className="col text-left mb-3">
                  <h3 style={{fontSize: '32px', fontWeight: '300'}}>
                    {props.informationSection.customerServiceTitle}
                  </h3>
                </div>
              </div>
              <div className="row w-100 pl-5 mb-5">
                {props.informationSection.customerServiceContacts.map((contact, ndx) => (
                  <div className="col-6 mb-4">
                    <p className="lead mb-1 font-weight-light">{contact.title}</p>
                    <p className="mb-0">{contact.subtitle}</p>
                    <p className="mb-0">{contact.hours}</p>
                    <p className="mb-0 font-weight-bold">
                      <strong>{contact.phoneNumber}</strong>{' '}
                    </p>
                    <p className="mb-0 font-weight-bold">
                      {ndx === 0 && <strong>0800 858 696</strong>}
                    </p>
                  </div>
                ))}
              </div>
              <div className="row w-100 pl-5">
                {props.informationSection.offices.map(office => (
                  <div className="col-8 d-flex align-items-end justify-content-center">
                    <div>
                      <p className="lead mb-1 font-weight-light">{office.officeName}</p>

                      <p className="mb-0">
                        {office.address}
                        <span className="ml-3">
                          <img
                            src={googleMaps}
                            alt=""
                            style={{height: '30px'}}
                            className="ml-1 mb-2"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="col-md-6 d-none d-md-flex"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${
                  props.informationSection.imageRight.childImageSharp
                    ? props.informationSection.imageRight.childImageSharp.fluid.src
                    : props.informationSection.imageRight
                })`,
              }}
            />
          </div>
        </section>

        {/* Social Media */}
        <section className="social-media-section container-fluid">
          <div className="row h-100 text-light">
            <div className="col-md-8 col-10 d-flex justify-content-around align-items-center mx-auto flex-column flex-sm-row">
              <h3 className="mb-0 pt-1 font-weight-light">{props.socialMedia.socialMediaTitle}</h3>
              <div className="d-none d-sm-flex">
                <div className="d-flex mr-4">
                  <img
                    src={wechatIcon}
                    alt=""
                    style={{height: 30, width: 30, objectFit: 'contain'}}
                    className="mr-2"
                  />
                  <p className="mb-0 pt-1 d-none d-sm-block">
                    {props.socialMedia.wechatAccountOne}
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={wechatIcon}
                    alt=""
                    style={{height: 30, width: 30, objectFit: 'contain'}}
                    className="mr-4 mr-5-sm"
                  />
                  <p className="mb-0 pt-1 d-none d-sm-block">
                    {props.socialMedia.wechatAccountTwo}
                  </p>
                </div>
              </div>
              <div className="d-none d-sm-block">
                <a href="https://www.facebook.com/snowballsecurities" target="_blank">
                  <img
                    src={facebookIcon}
                    alt=""
                    style={{height: 30, width: 30, objectFit: 'contain'}}
                    className="mr-4"
                  />
                </a>
                <a href="https://www.linkedin.com/company/snowballsecurities" target="_blank">
                  <img
                    src={linkedinIcon}
                    alt=""
                    style={{height: 30, width: 30, objectFit: 'contain'}}
                    className="mr-4"
                  />
                </a>
                <a href="https://twitter.com/snowballsec?lang=en" target="_blank">
                  <img
                    src={twitterIcon}
                    alt=""
                    style={{height: 30, width: 30, objectFit: 'contain'}}
                  />
                </a>
              </div>
              <div className="d-flex d-sm-none">
                <div className="d-flex mr-4">
                  <img
                    src={wechatIcon}
                    alt=""
                    style={{height: 30, width: 30, objectFit: 'contain'}}
                    className="mr-2"
                  />
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={wechatIcon}
                    alt=""
                    style={{height: 30, width: 30, objectFit: 'contain'}}
                    className="mr-4 mr-5-sm"
                  />
                </div>
                <a href="https://www.facebook.com/snowballsecurities" target="_blank">
                  <img
                    src={facebookIcon}
                    alt=""
                    style={{height: 30, width: 30, objectFit: 'contain'}}
                    className="mr-4"
                  />
                </a>
                <a href="https://www.linkedin.com/company/snowballsecurities" target="_blank">
                  <img
                    src={linkedinIcon}
                    alt=""
                    style={{height: 30, width: 30, objectFit: 'contain'}}
                    className="mr-4"
                  />
                </a>
                <a href="https://twitter.com/snowballsec?lang=en" target="_blank">
                  <img
                    src={twitterIcon}
                    alt=""
                    style={{height: 30, width: 30, objectFit: 'contain'}}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Form */}
        <section className="contact-us-form mb-5">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-start">
              <div className="col-md-3 col-11 mb-4">
                <h3 className="mb-3">Contact Us</h3>
                <div className="pt-1">
                  <p className="lead mb-1 text-dark font-weight-light" style={{fontSize: '16px'}}>
                    Customer Inquiries
                  </p>
                  <p className="text-primary" style={{fontSize: '14px'}}>
                    <a href="mailto:service@snowballsecurities.com">
                      service@snowballsecurities.com
                    </a>
                  </p>
                </div>
                <div className="pt-1">
                  <p className="lead mb-1 text-dark font-weight-light" style={{fontSize: '16px'}}>
                    Media Inquiries
                  </p>
                  <p className="text-primary" style={{fontSize: '14px'}}>
                    <a href="mailto:pr@snowballsecurities.com">pr@snowballsecurities.com</a>
                  </p>
                </div>
                <div className="pt-1">
                  <p className="lead mb-1 text-dark font-weight-light" style={{fontSize: '16px'}}>
                    Business Cooperation
                  </p>
                  <p className="text-primary" style={{fontSize: '14px'}}>
                    <a href="mailto:bd@snowballsecurities.com">bd@snowballsecurities.com</a>
                  </p>
                </div>
              </div>

              <div className="col-md-7 col-11">
                <h3 className="mb-3">Leave a message</h3>
                <div className="row mb-2">
                  <div className="col-md-6">
                    <div className="form-group pt-1">
                      <label htmlFor="exampleFormControlInput1" style={{fontSize: '14px'}}>
                        Name
                      </label>
                      <input type="text" className="form-control" placeholder="John Smith" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group pt-1">
                      <label htmlFor="exampleFormControlInput1" style={{fontSize: '14px'}}>
                        Email address
                      </label>
                      <input type="email" className="form-control" placeholder="jon@snowball.com" />
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-12">
                    <div className="form-group pt-1">
                      <label htmlFor="exampleFormControlTextarea1" style={{fontSize: '14px'}}>
                        Message
                      </label>
                      <textarea className="form-control" rows="3" placeholder="Hello..." />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-outline-primary rounded-pill pt-2 px-4" type="button">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <DownloadNow {...props.downloadNow} />
        </section>
      </div>
    </PageTransition>
  )
}

function ContactPage({data}) {
  const {markdownRemark: contact} = data

  console.log(contact)

  return (
    <Layout white>
      <ContactPageTemplate
        headerImage={contact.frontmatter.headerImage}
        informationSection={contact.frontmatter.informationSection}
        socialMedia={contact.frontmatter.socialMedia}
        downloadNow={contact.frontmatter.downloadNow}
      />
    </Layout>
  )
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        headerImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        informationSection {
          customerServiceTitle
          customerServiceContacts {
            title
            subtitle
            hours
            phoneNumber
          }
          offices {
            officeName
            address
          }
          imageRight {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        socialMedia {
          socialMediaTitle
          wechatAccountOne
          wechatAccountTwo
        }
        downloadNow {
          mainText
          subText
          image {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
