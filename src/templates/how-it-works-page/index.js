// @flow
import React from 'react'
import {graphql} from 'gatsby'

import SharedJumbotron from '../../components/SharedJumbotron'
import Layout from '../../components/Layout'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

type HowItWorksTemplateProps = {
  headerImage: any,
  sections: Array<{title: string, description: string, image: any}>,
}

export function HowItWorksTemplate(props: HowItWorksTemplateProps) {
  return (
    <div className="how-it-works">
      <SharedJumbotron headerImage={props.headerImage} title="About" />

      <section>
        <div className="row">
          <div className="container">
            {props.sections.map((section, ndx) => (
              <div className="col-md-8 mx-auto">
                <div className="row w-100">
                  {ndx % 2 === 0 ? (
                    <>
                      <div className="col-md-8">
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                      </div>
                      <div className="col-md-4">
                        <PreviewCompatibleImage imageInfo={section.image} alt="section image" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-md-4">
                        <PreviewCompatibleImage imageInfo={section.image} alt="section image" />
                      </div>
                      <div className="col-md-8">
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

type Props = {
  data: {
    markdownRemark: {
      frontmatter: HowItWorksTemplate,
    },
  },
}

const HowItWorks = ({data}: Props) => {
  const {markdownRemark: hiwData} = data

  console.log(hiwData)

  return (
    <Layout>
      <HowItWorksTemplate
        sections={hiwData.frontmatter.sections}
        headerImage={hiwData.frontmatter.headerImage}
      />
    </Layout>
  )
}
export default HowItWorks

export const howItWorksPageQuery = graphql`
  query HowItWorksPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        headerImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sections {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
