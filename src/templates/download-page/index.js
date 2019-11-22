/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React, {useState} from 'react'
import {graphql} from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'

import Layout from '../../components/Layout'
import SharedJumbotron from '../../components/SharedJumbotron'
import DownloadNow from '../../components/DownloadNow'

type Props = {
  jumbotron: {
    title: string,
    description: string,
    headerImage: any,
  },
  mainPitch: string,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
}

export function DownloadPageTemplate({
  jumbotron,
  mainPitch,
  downloadNow,
}: Props) {

  return (
    <PageTransition>
      <div className="download-page">
        <SharedJumbotron {...jumbotron} />

        <section>
          <DownloadNow {...downloadNow} />
        </section>
      </div>
    </PageTransition>
  )
}

function DownloadPage({data}) {
  const {markdownRemark: download} = data

  return (
    <Layout white>
      <DownloadPageTemplate
        jumbotron={download.frontmatter.jumbotron}
        mainPitch={download.frontmatter.mainPitch}
        downloadNow={download.frontmatter.downloadNow}
      />
    </Layout>
  )
}

export const DownloadPageQuery = graphql`
  query DownloadPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        jumbotron {
          title
          description
          headerImage {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        mainPitch
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

export default DownloadPage
