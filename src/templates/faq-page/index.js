/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React, {useState} from 'react'
import {graphql} from 'gatsby'
import {UncontrolledCollapse} from 'reactstrap'

import Layout from '../../components/Layout'
import SharedJumbotron from '../../components/SharedJumbotron'
import './styles.scss'
import DownloadNow from '../../components/DownloadNow'

type FaqPageTemplateProps = {
  headerImage: any,
  categories: Array<{
    categoryTitle: string,
    questions: Array<{question: string, answer: string}>,
  }>,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
}

export function FaqPageTemplate(props: FaqPageTemplateProps) {
  const [currentNdx, setNdx] = useState(0)

  return (
    <div className="faq-page">
      <SharedJumbotron headerImage={props.headerImage} title="FAQS" description="Answered" />
      <div className="container pt-5 mb-5">
        <div className="row mx-auto">
          <div className="col-md-8 mx-auto">
            <ul className="nav nav-pills row justify-content-around">
              {props.categories.map((category, ndx) => (
                <li
                  key={ndx}
                  className="nav-item"
                  onClick={() => {
                    setNdx(ndx)
                  }}
                >
                  <a className={`nav-link ${ndx === currentNdx ? 'active' : ''}`}>
                    {category.categoryTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container pb-5">
        <div className="row">
          <div className="col-md-9 mx-auto">
            {props.categories[currentNdx].questions.map((cc, ndx) => (
              <div className="accordion py-2" key={ndx}>
                <button
                  id={`toggler${ndx}`}
                  type="button"
                  className="w-100 p-0 text-left"
                  style={{backgroundColor: 'transparent', border: 'none'}}
                >
                  <h5>{cc.question}</h5>
                  <UncontrolledCollapse toggler={`#toggler${ndx}`}>
                    <p className="mb-0 text-dark">{cc.question}</p>
                  </UncontrolledCollapse>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DownloadNow {...props.downloadNow} />
    </div>
  )
}

type Props = {
  data: {
    markdownRemark: {
      frontmatter: FaqPageTemplateProps,
    },
  },
}

function FaqPage({data}: Props) {
  const {markdownRemark: faq} = data

  console.log(faq)

  return (
    <Layout>
      <FaqPageTemplate
        headerImage={faq.frontmatter.headerImage}
        categories={faq.frontmatter.categories}
        downloadNow={faq.frontmatter.downloadNow}
      />
    </Layout>
  )
}

export default FaqPage

export const faqPageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        headerImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        categories {
          categoryTitle
          questions {
            question
            answer
          }
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
