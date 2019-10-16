// @flow
import React from 'react'

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
              <div className="col-md-8">
                <div className="row">
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
  const {markdownRemark: post} = data

  return (
    <Layout>
      <HowItWorksTemplate
        sections={post.frontmatter.sections}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}
export default HowItWorks
