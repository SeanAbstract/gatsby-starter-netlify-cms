// @flow
import React from 'react'
import {graphql} from 'gatsby'

import './styles.scss'
import PageTransition from 'gatsby-plugin-page-transitions'

import SharedJumbotron from '../../components/SharedJumbotron'
import Layout from '../../components/Layout'
import HowItWorksSection from '../../components/HowItWorksSection'
import DownloadNow from '../../components/DownloadNow'

type HowItWorksTemplateProps = {
  headerImage: any,
  sections: Array<{title: string, description: string, image: any}>,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
}

export function HowItWorksTemplate(props: HowItWorksTemplateProps) {
  return (
    <PageTransition>
      <div className="how-it-works">
        <SharedJumbotron {...props.jumbotron} />

        <section className="container-fluid">
          <div className="row">
            <div className="container py-5">
              <HowItWorksSection
                sections={props.sections}
                contentComponent={props.contentComponent}
              />
            </div>
          </div>
        </section>

        <DownloadNow {...props.downloadNow} />
      </div>
    </PageTransition>
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
    <Layout white>
      <HowItWorksTemplate
        sections={hiwData.frontmatter.sections}
        jumbotron={hiwData.frontmatter.jumbotron}
        downloadNow={hiwData.frontmatter.downloadNow}
      />
    </Layout>
  )
}
export default HowItWorks

export const howItWorksPageQuery = graphql`
  query HowItWorksPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        jumbotron {
          title
          description
          headerImage {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 100) {
                ...GatsbyImageSharpFluid
              }
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
        downloadNow {
          mainText
          subText
          image {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
