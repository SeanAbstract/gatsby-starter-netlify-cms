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
        <div className="row">
          <div className="col-md-6 d-flex ">
            <h3>Customer Service</h3>
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
