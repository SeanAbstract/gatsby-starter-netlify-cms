import React from 'react'

import DownloadNow from '../DownloadNow'
import TestimonyCarousel from '../TestimonyCarousel'

import Layout from './layout/layout'
import MainSection from './landingPage/mainSection'
import SecondSection from './landingPage/secondSection'
import ThirdSection from './landingPage/thirdSection'
import FourthSection from './landingPage/fourthSection'
import FifthSection from './landingPage/fifthSection'
import SixthSection from './landingPage/sixthSection'
import SeventhSection from './landingPage/seventhSection'

const IndexPage = ({testimonials}) => (
  <Layout>
    {/* <SEO title="Home" /> */}

    <MainSection />

    <SecondSection />

    <ThirdSection />

    <FourthSection />

    <FifthSection />

    <SixthSection />

    <SeventhSection />

    <div className="carousel slide carousel-container" data-ride="carousel">
      <TestimonyCarousel testimonials={testimonials} />
    </div>

    <DownloadNow mainText="ACCESS GLOBAL MARKETS TODAY" subText="Download now" />
  </Layout>
)

export default IndexPage
