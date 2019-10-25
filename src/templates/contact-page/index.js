// @flow
import React from 'react'
import {graphql} from 'gatsby'

import DownloadNow from '../../components/DownloadNow'
import Layout from '../../components/Layout'
import SharedJumbotron from '../../components/SharedJumbotron'
import './styles.scss'
import facebookIcon from '../../img/facebook.png'
import linkedinIcon from '../../img/linkedin.png'
import twitterIcon from '../../img/twitter.png'
import wechatIcon from '../../img/wechat.png'

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
    <div className="contact-page">
      <SharedJumbotron headerImage={props.headerImage} title="Contact" description="Here to help" />

      <section className="customer-service-section">
        <div className="row h-100">
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
            <div className="row w-75 pl-5">
              <div className="col text-left ">
                <h3>{props.informationSection.customerServiceTitle}</h3>
              </div>
            </div>
            <div className="row w-75 pl-5">
              {props.informationSection.customerServiceContacts.map(contact => (
                <div className="col-sm-6 mb-4">
                  <p className="lead mb-1">{contact.title}</p>
                  <p className="mb-0">{contact.subtitle}</p>
                  <p className="mb-0">{contact.hours}</p>
                  <p className="mb-0">
                    <strong>{contact.phoneNumber}</strong>{' '}
                  </p>
                </div>
              ))}
            </div>
            <div className="row w-75 pl-5">
              {props.informationSection.offices.map(office => (
                <div className="col-8">
                  <p className="lead mb-1">{office.officeName}</p>
                  <p className="mb-0">{office.address}</p>
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
      <section className="social-media-section">
        <div className="row h-100 text-light">
          <div className="col-md-8 col-10 d-flex justify-content-around align-items-center mx-auto">
            <h3>{props.socialMedia.socialMediaTitle}</h3>
            <div className="d-flex">
              <div className="d-flex mr-5">
                <img
                  src={wechatIcon}
                  alt=""
                  style={{height: 30, width: 30, objectFit: 'contain'}}
                  className="mr-2"
                />
                <p className="mb-0">{props.socialMedia.wechatAccountOne}</p>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={wechatIcon}
                  alt=""
                  style={{height: 30, width: 30, objectFit: 'contain'}}
                  className="mr-2"
                />
                <p className="mb-0">{props.socialMedia.wechatAccountTwo}</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img
                src={facebookIcon}
                alt=""
                style={{height: 30, width: 30, objectFit: 'contain'}}
                className="mr-3"
              />
              <img
                src={wechatIcon}
                alt=""
                style={{height: 30, width: 30, objectFit: 'contain'}}
                className="mr-3"
              />
              <img
                src={linkedinIcon}
                alt=""
                style={{height: 30, width: 30, objectFit: 'contain'}}
                className="mr-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Form */}
      <section className="contact-us-form mb-5">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-start">
            <div className="col-md-3">
              <h3 className="mb-3">Contact Us</h3>
              <div>
                <p className="lead mb-1">Customer Inquiries</p>
                <p className="text-primary">service@snowballsecurities.com</p>
              </div>
              <div>
                <p className="lead mb-1">Media Inquiries</p>
                <p className="text-primary">service@snowballsecurities.com</p>
              </div>
              <div>
                <p className="lead mb-1">Business Cooperation</p>
                <p className="text-primary">service@snowballsecurities.com</p>
              </div>
            </div>

            <div className="col-md-5">
              <h3 className="mb-3">Leave a message</h3>
              <div className="row mb-2">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" placeholder="name@example.com" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control" rows="3" />
                  </div>
                </div>
              </div>
              <div>
                <button className="btn-outline-primary btn rounded-pill px-4" type="button">
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
  )
}

function ContactPage({data}) {
  const {markdownRemark: contact} = data

  console.log(contact)

  return (
    <Layout>
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
