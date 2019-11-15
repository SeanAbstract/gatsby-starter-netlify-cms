import React from 'react'

import DownloadNow from '../DownloadNow'

import Layout from './layout/layout'
import MainSection from './landingPage/mainSection'
import SecondSection from './landingPage/secondSection'
import ThirdSection from './landingPage/thirdSection'
import FourthSection from './landingPage/fourthSection'
import FifthSection from './landingPage/fifthSection'
import SixthSection from './landingPage/sixthSection'
import SeventhSection from './landingPage/seventhSection'
import EighthSection from './landingPage/eighthSection'

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}

    <MainSection />

    <SecondSection />

    <ThirdSection />

    <FourthSection />

    <FifthSection />

    <SixthSection />

    <SeventhSection />

    <EighthSection />

    <DownloadNow white />
  </Layout>
)

export default IndexPage
