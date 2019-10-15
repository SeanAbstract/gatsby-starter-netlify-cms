/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({mainpitch, tabs, headerImage}) => {
  const [tabDescription, setTabDescription] = useState(tabs[0].description)

  return (
    <div>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url(${
            headerImage.childImageSharp ? headerImage.childImageSharp.fluid.src : headerImage
          })`,
        }}
      />

      <div className="row">
        <div className="container">
          <div className="col-md-8 mx-auto text-center">
            <h3>{mainpitch.title}</h3>
            <p>{mainpitch.description}</p>
            <p>{mainpitch.secondDescription}</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              {tabs.map(tab => (
                <div
                  className="col-md-4"
                  key={tab.title}
                  onClick={() => setTabDescription(tab.description)}
                >
                  <p>{tab.title}</p>
                </div>
              ))}
            </div>
            <p>{tabDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
  tabs: PropTypes.array,
}

const AboutPage = ({data}) => {
  const {markdownRemark: post} = data

  console.log(data)

  return (
    <Layout>
      <AboutPageTemplate
        mainpitch={post.frontmatter.mainpitch}
        tabs={post.frontmatter.tabs}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        headerImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
          description
          secondDescription
        }
        tabs {
          title
          icon {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          description
        }
      }
    }
  }
`
