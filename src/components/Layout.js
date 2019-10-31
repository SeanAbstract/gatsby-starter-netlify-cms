import React from 'react'
import {Helmet} from 'react-helmet'
import {withPrefix} from 'gatsby'
import styled from 'styled-components'

import Footer from './Footer'
import './global.scss'
import useSiteMetadata from './SiteMetadata'
import Header from './Header'

const TemplateWrapper = ({children, white}) => {
  const {title, description} = useSiteMetadata()
  return (
    <div className="h-100">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.png`}
          sizes="16x16"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/logo.jpg`} />
      </Helmet>
      <Header white={white} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </div>
  )
}

const StyledMain = styled.main`
  margin-bottom: 385px;
  position: relative;
`

export default TemplateWrapper
