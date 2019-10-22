// @flow
import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../../components/Layout'
import SharedJumbotron from '../../components/SharedJumbotron'
import './styles.scss'

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
}

function ContactPageTemplate(props: Props) {
  return (
    <div className="contact-page">
      <SharedJumbotron headerImage={props.headerImage} title="Contact" description="Here to help" />

      <section className="customer-service-section">
        <div className="row h-100">
          <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
            <div className="mx-auto">
              <div className="row w-100">
                <div className="col text-left">
                  <h3>{props.informationSection.customerServiceTitle}</h3>
                </div>
              </div>
              <div className="row w-100">
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
              <div className="row w-100">
                {props.informationSection.offices.map(office => (
                  <div className="col-8">
                    <p className="lead mb-1">{office.officeName}</p>
                    <p className="mb-0">{office.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="col-md-6"
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
        <div className="row h-100">
          <div className="col-md-8 d-flex justify-content-around align-items-center mx-auto">
            <h3>{props.socialMedia.socialMediaTitle}</h3>
            <div className="d-flex">
              <div className="d-flex">
                <p className="mb-0">icon</p>
                <p className="mb-0">{props.socialMedia.wechatAccountOne}</p>
              </div>
              <div className="d-flex">
                <p className="mb-0">icon</p>
                <p className="mb-0">{props.socialMedia.wechatAccountTwo}</p>
              </div>
            </div>
            <div className="d-flex">
              <p className="mb-0">icon</p>
              <p className="mb-0">icon</p>
              <p className="mb-0">icon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Form */}
      <section className="contact-us-form" />
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
      }
    }
  }
`
