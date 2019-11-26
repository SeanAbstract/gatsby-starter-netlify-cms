import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'

import '../terms/styles.scss'
import Layout from '../../components/Layout'
import Content, {HTMLContent} from '../../components/Content'
import SharedJumbotron from '../../components/SharedJumbotron'
import DownloadNow from '../../components/DownloadNow'

type PrivacyPageTemplate = {
  content: Node.isRequired,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  headerImage: any,
}

export const PrivacyPageTemplateExport = (props: PrivacyPageTemplate) => {
  const PostContent = props.contentComponent || Content
  const {content, headerImage, downloadNow} = props

  return (
    <div className="terms-page">
      <SharedJumbotron headerImage={headerImage} />

      <section className="blog-post-container" style={{paddingBottom: '250px'}}>
        <div className="container content">
          <div className="row justify-content-center">
            <div className="col col-10 blog-container">
              <h3>
                Online Privacy Policy
              </h3>
              {/* <PostContent content={content} /> */}
              <p>
                Your privacy is important to us. This notice explains our online information
                practices and the choices you can make about the way your information is used at our
                site. Parts of our website may require you to provide us with personal information.
                Our privacy policy restricts us in the use we can make of personal information.
                <br />
                <br />
              </p>
              <h3>The Information we collect</h3>
              {/* <PostContent content={content} /> */}
              <p>
                We do not collect personally identifiable information about you – such as your name,
                address, telephone number, fax number, email address, etc. – unless you choose to
                fill out a form under “Contact Us” or you email us directly. We do automatically
                collect certain nonpersonally identifiable information when you visit our site –
                such as the type of browser you are using, the type of operating system you are
                using, and the domain name of your Internet service provider.
                <br />
                <br />
              </p>
              <h3>How we normally use information about you</h3>
              {/* <PostContent content={content} /> */}
              <p>
                We use nonpersonally identifiable information to analyse site usage (such as
                aggregated information on the pages visited by our users), which allows us to
                improve the design and content of our site.
                <br />
                <br />
                In the ordinary course, we use personally identifiable information you provide
                solely to respond to your inquiry. Any personal data obtained through this website
                will be used for internal purposes by SNB Finance Holdings and its group companies
                only, and will remain strictly confidential. We will not contact you about other
                matters, unless you specifically request it, and the data will not be communicated
                or sold to third parties under any circumstances within our control.
                <br />
                <br />
                We cannot guarantee the privacy of personal information you transmit over the web or
                that may be collectable in transit by others, including contractors who provide
                services to us.
                <br />
                <br />
              </p>
              <h3>You can access and update your personal information</h3>
              {/* <PostContent content={content} /> */}
              <p>
                You have a right to access the personal information we collect and hold about you
                subject to certain limitations under New Zealand privacy laws. If you would like to
                access or change your details please contact us. In most cases, a summary of your
                personal information, such as your name, contact details and the matters in which we
                act for you, is available free of charge. We encourage you to contact us to update
                your personal information to ensure it is accurate, current and complete.
                <br />
                <br />{' '}
              </p>
              <h3>Collection of information by third-party sites and sponsors</h3>
              {/* <PostContent content={content} /> */}
              <p>
                Our site contains links to other sites whose information practices may be different
                than ours. Visitors should consult the other sites’ privacy notices as we have no
                control over information that is submitted to, or collected by, these third parties.
                <br />
                <br />
              </p>
              <h3>Contact us</h3>
              {/* <PostContent content={content} /> */}
              <p>
                If you have a question or a complaint about how we collect, use or disclose your
                personal information (including any breach of New Zealand Privacy Principles),
                please contact us at
                <br />
                <br />
                SNB Finance Holdings
                <br />
                Level 5, 25 Teed Street Newmarket, Auckland 1023
                <br />
                <br />
                or by telephoning us on <a href="tel:+6495201919">(+64)(0)9 520 1919</a> or{' '}
                <a href="tel:0800858696">0800 858 696</a>
                <br />
                or by emailing us at{' '}
                <a href="mailto:service@snowballsecurities.com">service@snowballsecurities.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const PrivacyPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout footerLinks={post.frontmatter.footerLinks}>
      <PrivacyPageTemplateExport
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

PrivacyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PrivacyPage

export const pageQuery = graphql`
  query PrivacyPolicy($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        headerImage {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
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
        footerLinks {
          firstRow {
            name
            href
          }
          secondRow {
            name
            href
          }
        }
      }
    }
  }
`
