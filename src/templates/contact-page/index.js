// @flow
import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../../components/Layout'
import SharedJumbotron from '../../components/SharedJumbotron'
import './styles.scss'

type Props = {
  headerImage: any,
}

function ContactPageTemplate(props: Props) {
  return (
    <div className="contact-page">
      <SharedJumbotron headerImage={props.headerImage} title="Contact" description="Here to help" />

      <section className="customer-service-section">
        <div className="row h-100">
          <div className="col-md-6  w-75 d-flex justify-content-center align-items-center flex-column">
            <div className="mx-auto">
              <div className="row w-100">
                <div className="col text-left">
                  <h3>Customer Service</h3>
                </div>
              </div>
              <div className="row w-100">
                <div className="col-sm-6">
                  <p className="lead">Global (En/Ch)</p>
                  <p className="mb-0">NZ Trading Hours time</p>
                  <p className="mb-0">10:00 - 16:00</p>
                  <p className="mb-0">
                    <strong>+649985377197</strong>{' '}
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="lead">Global (En/Ch)</p>
                  <p className="mb-0">NZ Trading Hours time</p>
                  <p className="mb-0">10:00 - 16:00</p>
                  <p className="mb-0">
                    <strong>+649985377197</strong>{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              backgroundImage: props.headerImage.childImageSharp
                ? props.headerImage.childImageSharp.fluid.src
                : props.headerImage,
            }}
          />
        </div>
      </section>
    </div>
  )
}

function ContactPage({data}) {
  const {markdownRemark: contact} = data

  return (
    <Layout>
      <ContactPageTemplate headerImage={contact.frontmatter.headerImage} />
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
      }
    }
  }
`
