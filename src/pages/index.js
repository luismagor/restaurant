import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { HomeHeader, Banner } from "../utils"
import image from "../images/bcg/homeBcg.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader image={image}>
      <Banner
        title="eatery"
        subtitle="55 main street — Santa Monica, CA"
      ></Banner>
    </HomeHeader>
  </Layout>
)

export default IndexPage
