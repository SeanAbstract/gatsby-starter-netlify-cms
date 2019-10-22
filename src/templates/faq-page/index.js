/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @flow
import React, {useState} from 'react'
import {graphql} from 'gatsby'

import Layout from '../../components/Layout'
import SharedJumbotron from '../../components/SharedJumbotron'

type FaqPageTemplateProps = {
  headerImage: any,
  categories: Array<{
    categoryTitle: string,
    questions: Array<{question: string, answer: string}>,
  }>,
}

export function FaqPageTemplate(props: FaqPageTemplateProps) {
  const [currentNdx, setNdx] = useState(0)

  return (
    <div>
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

      <div className="container">
        <div className="row">
          <div className="col-md-9 mx-auto">
            {props.categories[currentNdx].questions.map((cc, ndx) => (
              <div className="mb-5" key={ndx}>
                <h5>{cc.question}</h5>
                <p>{cc.question}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
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
      }
    }
  }
`
