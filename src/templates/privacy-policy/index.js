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
                SNOWBALL X PRIVACY POLICY (NEW ZEALAND CUSTOMERS)
              </h3>
              {/* <PostContent content={content} /> */}
              <p>
                <br />
                SNB Finance Holdings Limited (Snowball X, we or us) attach great importance to protecting our customers’ privacy.  If you are a customer who is based in New Zealand, we are committed to meeting our obligations under the Privacy Act 1993.    
                <br />
                <br />
                This Privacy Policy sets out how we collect and use your personal information when you use our products and services, including through our website (www.snowball-X.com) and our mobile application (Snowball X App or Snowball Token). 
                <br />
                <br /> 
                This Privacy Policy applies to customers who are based in New Zealand. Our Snowball X Privacy Policy (Overseas Customers) applies to customers who are based outside New Zealand.  
                <br />
                <br />
                Please read this Privacy Policy carefully before using our products and services.  In using our products and services, and providing us with personal information, you agree to this Privacy Policy.
                <br />
                <br />
                </p>
                <h5>
                Changes to this Privacy Policy
                </h5>
                <p>
                We encourage you to review this Privacy Policy regularly as we may update it from time to time.   When we update it we will notify you by changing the date at the top of this policy.
                <br />
                <br />
                </p>
                <h5>
                Personal information we collect
                </h5>
                <p>
                We may collect personal information about you, including:
                <br />
                •	name, date and place of birth, country of residence, tax status, address and contact details
                <br />
                •	financial position (including, income, wealth, assets, and net worth)
                <br />
                •	employment information
                <br />
                •	investment experience and preferences 
                <br />
                •	transaction activity and data
                <br />
                •	copies of your passports and identity documents, photos and videos of your face and your signature
                <br />
                •	information about your device, including relating to its systems, network, IP address and settings  
                <br />
                •	how you use our website and mobile application
                <br />
                •	any information you provide us when you contact us, including through our online consultation or telephone hotline (these communications and conversations may be recorded for verification and training purposes).
                <br />
                <br />
                If you do not provide some or all of your personal information to us, we may be unable to provide you with products and services, and/or certain features of our products and services may not be available to you. 
                <br />
                <br />
                We will normally collect personal information about you from you directly.  However, we may collect personal information about you from third parties where you have authorised such collection, or such collection is permitted or required by the Privacy Act 1993 or any other applicable law.
                <br />
                <br />
                </p>
                <h5>
                What we use your personal information for
                </h5>
                <p>
                We collect and use your personal information for the following purposes: 
                <br />
                •	providing you with our products and services, including through different device systems, mobile phones and networks
                <br />
                •	setting up, managing and monitoring your account (including carrying out your instructions relating to transactions through your account)
                <br />
                •	verifying your identity
                <br />
                •	managing and protecting the security of your account, our systems and other customers’ accounts
                <br />
                •	complying with our licensing requirements, regulations, laws and court orders (both in New Zealand and overseas), including meeting our obligations under the Anti-Money Laundering and Countering Financing of Terrorism Act 2009
                <br />
                •	preventing and detecting fraud and other unlawful activity
                <br />
                •	providing you with market information, notifications and reminders (where you have opted-in to receive them)
                <br />
                •	sending you marketing and promotional messages and materials (where you have opted-in to receive them in the Customer Agreement)
                <br />
                •	sending you questionnaires about your use of the products and services that you have agreed to receive
                <br />
                •	informing you about changes to our terms and conditions and this privacy policy
                <br />
                •	managing our relationship with you and the products and services we provide you
                <br />
                •	internal research, development and improvement of our products and services, and
                <br />
                •	exercising our rights under our agreements with you and the terms and conditions for providing products and services.
                <br />
                <br />
                </p>
                <h5>
                Who we may share your personal information with
                </h5>
                <p>
                We may provide your personal information to our employees, companies within our group, persons who provide services to us (for example, service providers including brokers, contractors, advisers and agents), regulatory authorities, government agencies, law enforcement, exchanges, courts and other third parties (including financial institutions).  We will only disclose your personal information to these parties: 
                <br />
                •	for the purposes set out in this privacy policy;
                <br />
                •	if you have otherwise authorised us to do so;
                <br />
                •	if we are required or permitted by law to disclose such information; or
                <br />
                •	otherwise in accordance with the Privacy Act 1993.
                <br />
                <br />
                These recipients may be located in New Zealand or overseas, including in China and the United States of America.
                <br />
                <br />
                </p>
                <h5>
                Retention, storage and security
                </h5>
                <p>
                We will delete your personal information when it is no longer required for the purpose it was collected it for.  
                <br />
                <br />
                We will retain your personal information (including after you have deleted or cancelled your account) only where we are required to by law.  For example, the Anti-Money Laundering and Countering Financing of Terrorism Act 2009 requires us to retain certain personal information for a minimum of five years. 
                <br />
                <br /> 
                Your personal information will be stored physically or electronically (including via cloud storage) by us, or the persons to whom we disclose it to, in New Zealand and overseas.
                <br />
                <br />
                We will protect your personal information using such security safeguards as it is reasonable in the circumstances to take against loss, unauthorised access, use, modification or disclosure, and other misuse.
                <br />
                <br />
                </p>
                <h5>
                Your rights to access and correction
                </h5>
                <p>
                The Privacy Act 1993 gives you rights to request access to, and correction of, your personal information held by us.  If you wish to exercise these rights, please contact us at: at{' '}
                <a href="mailto:service@snowball-x.com">service@snowball-x.com</a>
                <br />
                <br />
                </p>
                <h5>
                COOKIE POLICY
                </h5>
                <p>
                When you visit our website we will install cookies on the browser you are using to help us to confirm your identity, store user information and track your access behaviour. Cookies are small blocks of text stored on your device.  Our cookies do not collect any other information about you when you use our website or any other website.  
                <br />
                <br />
                You may be able to prevent new cookies from being installed and delete existing cookies by changing the settings on your device. If you do so, this may cause some functions in our website or system to be ineffective or unusable.   
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
