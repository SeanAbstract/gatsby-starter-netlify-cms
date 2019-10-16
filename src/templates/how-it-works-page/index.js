// @flow
import React from 'react'
import {graphql} from 'gatsby'

import SharedJumbotron from '../../components/SharedJumbotron'
import Layout from '../../components/Layout'
import {HTMLContent} from '../../components/Content'
import HowItWorksSection from '../../components/HowItWorksSection'

type HowItWorksTemplateProps = {
  headerImage: any,
  sections: Array<{title: string, description: string, image: any}>,
  contentComponent: any,
}

export function HowItWorksTemplate(props: HowItWorksTemplateProps) {
  return (
    <div className="how-it-works">
      <SharedJumbotron headerImage={props.headerImage} title="How It Works" description="Simply" />

      <section>
        <div className="row">
          <div className="container">
            <HowItWorksSection
              sections={props.sections}
              contentComponent={props.contentComponent}
            />
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
        contentComponent={HTMLContent}
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
          body
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
