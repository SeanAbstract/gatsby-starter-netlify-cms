import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'

import './styles.scss'
import Layout from '../../components/Layout'
import Content, {HTMLContent} from '../../components/Content'
import SharedJumbotron from '../../components/SharedJumbotron'
import DownloadNow from '../../components/DownloadNow'

type TermsPageTemplate = {
  content: Node.isRequired,
  contentComponent: any,
  downloadNow: {
    mainText: string,
    subText: string,
    image: any,
  },
  headerImage: any,
}

export const TermsPageTemplateExport = (props: TermsPageTemplate) => {
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
                SNOWBALL X WEBSITE TERMS OF USE 
              </h3>
              {/* <PostContent content={content} /> */}
              <p>
                <br />
                These terms govern your use of the Snowball X website (website).  By using this website, you agree to these terms.  Please read these terms carefully.
                <br />
                <br />
                References to this website mean this website only, and do not mean any external websites. If we provide you links to external websites:
                <br />
                <br />
                (a)	these terms do not apply to your use of those websites (you must comply with the terms of use of those websites);
                <br />
                (b)	we are not responsible for the content of those websites; and 
                <br />
                (c)	the links are provided for your convenience only and do not represent any endorsement by Snowball X of the content of those websites.
                <br />
                <br />
                </p>
                <h5>
                Changes to these terms of use and this website
                </h5>
                <p>
                We may change these terms from time to time by publishing an updated version on this website.  By continuing to use this website you agree to the latest version of these terms.
                <br />
                <br />
                </p>
                <h5>
                Information on this website
                </h5>
                <p>
                The information and materials accessible on this website (including through links to external websites) are provided for your preliminary and general information only. All information and material on this website is a guide only, does not take into account your personal financial situation, and does not constitute any form of financial, legal, tax or accounting advice.
                <br />
                <br />
                You agree not to treat any information and materials accessed on this website (including through links to external websites) as financial, legal, tax or accounting advice.
                <br />
                <br />   
                We recommend that you obtain independent professional advice on your individual requirements before making any investment decision.
                <br />
                <br /> 
                While care has been taken in producing and updating information on this website, errors or changes may occur.  We will comply with our legislative and regulatory requirements in relation to updating and providing information to our clients.  Certain information and services on or made available through this website may be sourced from third parties or other external data providers outside the control Snowball X.
                <br />
                <br /> 
                The information on the website is provided “as is” and subject to change without notice. To the extent permitted by law, and without affecting our legislative or regulatory obligations or any rights you may have under New Zealand consumer law, Snowball X:
                <br />
                <br />
                •	makes no representation or warranty of any kind as to the accuracy, completeness, currency or fitness for purpose of any information or materials contained on this website; and
                <br />
                •	will not be responsible for the reliance of any person on the information or materials on this website and accepts no responsibility for any loss or damage incurred as a result of that reliance.
                <br />
                <br />
                </p>
                <h5>
                Availability of this website
                </h5>
                <p>
                We intend for this website to be available to you on a continuous basis.   However, there may be times when access to this website, or particular functionality of this website, is limited or unavailable.  We make no guarantees about the availability of this website and will not be responsible for any consequences resulting from the unavailability of this website or your inability to access the website or any particular functionality of the website at any time.
                <br />
                <br />
                </p>
                <h5>
                Jurisdiction
                </h5>
                <p>
                The information and services provided on this website are designed and intended for use in New Zealand, and not intended to be available for any person in any jurisdiction where doing so would result in contravention of any applicable laws or regulations in that jurisdiction.  By accessing this website, you confirm that the laws and regulations of your jurisdiction allow access to the information and services on this website.  
                <br />
                <br />
                We accept no responsibility for the compliance of this website or the information contained in it with the laws or regulations of any country or jurisdiction other than New Zealand. 
                <br />
                <br />
                </p>
                <h5>
                Intellectual Property
                </h5>
                <p>
                We, or our third party content providers or licensors, own all copyright and other intellectual property rights contained in this website.  All rights are reserved.  You can access, view, reproduce and print the material on this website for your private, informational and non-commercial purposes only.  
                <br />
                <br />
                You have no rights in the website or any of its components or content.  Except as provided in these terms, you must not copy, display, modify, reproduce, republish, print, distribute or use in any other way, any information contained in or part of this website without our prior written permission.
                <br />
                <br />
                </p>
                <h5>
                Your Responsibilities
                </h5>
                <p>
                You must not:
                <br />
                •	use this website for any unlawful purpose or in a way which breaches any third party’s rights;
                <br />
                •	do anything that could place an unreasonable or disproportionately large load on this website;
                <br />
                •	make any modifications to this website, or create a link to this website from any other website, without our written permission;
                <br />
                •	test, scan or circumvent the security of this website; or
                •	knowingly transmit any virus, worm, defect, Trojan horse or any other malicious code to this website.
                <br />
                <br />
                </p>
                <h5>
                Cookies and analytics tools
                </h5>
                <p>
                When you visit our website we will install cookies on the browser you are using to help us to confirm your identity, store user information and track your access behaviour.   Cookies are small blocks of text stored on your device. Our cookies do not collect any other information about you when you use our website or any other website.  
                <br />
                <br />
                You may be able to prevent new cookies from being installed and delete existing cookies by changing the settings on your device. If you do so, this may cause some functions in our website or system to be ineffective or unusable.  
                <br />
                <br />   
                We use various analytics tools to collect and analyse information about your use of this website and our services and products.  The information collected and used in this way could be information about you, or anonymous information connected to you.  We use this information and analysis to improve this website and to better understand visitor behaviour on our website.
                <br />
                <br />
                </p>
                <h5>
                About us
                </h5>
                <p>
                We are registered on the New Zealand Financial Service Providers Register (FSP:594389) as a provider of broking services (including custodial services), and are a member of the Financial Dispute Resolution Scheme. We are not licensed by a New Zealand regulator and are not actively regulated in New Zealand.  Our registered office is at Level 5, 25 Teed Street, Newmarket, Auckland 1023, New Zealand.
                <br />
                <br />
                </p>
                <h5>
                Disclaimer
                </h5>
                <p>
                All information and content on this website is subject to change.  All information is provided “as is” and we accept no responsibility, and will not be liable, for any errors, omissions or inaccuracies in the information on this website.  
                <br />
                <br />
                </p>
                <h5>
                Privacy
                </h5>
                <p>
                We hold all person information we collect about in accordance with our {' '} <Link to="/privacy-policy">privacy policy</Link>.
                <br />
                <br />
                </p>
                <h5>
                General
                </h5>
                <p>
                Our failure or delay in exercising or enforcing any right or provision of these terms will not operate as a waiver. 
                <br />
                <br />
                A finding that any provision of these terms is invalid or unenforceable will not affect any other part of these terms. 
                <br />
                <br />
                The terms and conditions applicable to our website are governed by and construed in accordance with the laws of New Zealand.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const TermsPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout footerLinks={post.frontmatter.footerLinks}>
      <TermsPageTemplateExport
        content={post.html}
        contentComponent={HTMLContent}
        downloadNow={post.frontmatter.downloadNow}
        headerImage={post.frontmatter.headerImage}
      />
    </Layout>
  )
}

TermsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default TermsPage

export const pageQuery = graphql`
  query TermsAndConditions($id: String!) {
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
