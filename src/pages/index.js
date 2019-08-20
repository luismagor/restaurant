import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { HomeHeader, Banner, BannerButton } from "../utils"
import image from "../images/bcg/homeBcg.jpeg"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import Gallery from "../components/HomePageComponents/Gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader image={image}>
      <Banner title="eatery" subtitle="55 main street — Santa Monica, CA">
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
