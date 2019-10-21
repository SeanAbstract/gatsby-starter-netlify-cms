import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col} from 'reactstrap'

import logo from '../../../static/img/snowball-logo-x.png'
import facebookIcon from '../../../static/img/facebook_blue.png'
import linkedinIcon from '../../../static/img/linkedin_blue.png'
import twitterIcon from '../../../static/img/twitter_blue.png'
import wechatIcon from '../../../static/img/wechat_blue.png'

function Footer() {
  return (
    <StyledFooter>
      <StyledContainer className="justify-content-between d-flex flex-column py-5">
        <Row className="w-100 justify-content-between">
          <Col md={6}>
            <Row>
              <Col md={4}>
                <div>
                  <img src={logo} alt="" style={{maxHeight: '50px', maxWidth: '50px'}} />
                </div>
              </Col>
              <Col md={4}>
                <p className="mb-1">About</p>
                <p className="mb-1">How it works</p>
                <p className="mb-1">Prices</p>
                <p className="mb-1">Downloads</p>
              </Col>
              <Col md={4}>
                <p className="mb-1">Blog</p>
                <p className="mb-1">Risk Disclosure</p>
                <p className="mb-1">FAQs</p>
                <p className="mb-1">Contact</p>
              </Col>
            </Row>
          </Col>

          <Col md={4}>{/* <h2>Hellew</h2> */}</Col>
        </Row>

        <Row className="my-3">
          <Col md={8} />

          <Col md={4} className="justify-content-end">
            <Row className="w-100">
              <Col className="text-right">
                <img
                  src={facebookIcon}
                  alt=""
                  style={{maxHeight: '30px', maxWidth: '30px'}}
                  className="mr-4"
                />
                <img
                  src={linkedinIcon}
                  alt=""
                  style={{maxHeight: '30px', maxWidth: '30px'}}
                  className="mr-4"
                />
                <img
                  src={twitterIcon}
                  alt=""
                  style={{maxHeight: '30px', maxWidth: '30px'}}
                  className="mr-4"
                />
                <img src={wechatIcon} alt="" style={{maxHeight: '30px', maxWidth: '30px'}} />
              </Col>
            </Row>
            <Row className="justify-content-end mt-3 w-100">
              <Col className="text-right">
                <small className="mr-3" style={{fontSize: '10px'}}>
                  Privacy Policy
                </small>
                <small style={{fontSize: '10px'}}>Terms and Conditions</small>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={9} className="mb-3" style={{lineHeight: 1.1}}>
            <StyledSmall>
              Snowball Securities®, 雪盈证券® are New Zealand registered trademarks of SNB Finance
              Holdings Limited (NZBN: 9429046386212) (&quot;SNB&quot;).
            </StyledSmall>
            <br />
            <StyledSmall>
              SNB is registered on the New Zealand Financial Service Providers Register
              (FSP:594389). SNB’s Financial Service Providers registration can be verified on the
              Financial Service Providers Register.
            </StyledSmall>
            <br />
            <StyledSmall>
              SNB is a member of the Financial Dispute Resolution Scheme, which is an independent
              dispute resolution scheme. New Zealand. SNB’s registered office is at Level 5, 25 Teed
              Street, Newmarket, Auckland 1023, New Zealand.
            </StyledSmall>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Trademark>© 2019 Snowball Securities</Trademark>
          </Col>
        </Row>
      </StyledContainer>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  min-height: 40vh;
  background-color: #f5f5f5;
`

const StyledContainer = styled(Container)`
  line-height: 1.1;
`

const StyledSmall = styled.small`
  line-height: 1.1;
`

const Trademark = styled.small`
  font-size: 8px;
`

export default Footer
