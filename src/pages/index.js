import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { HomeHeader } from "../utils"
import image from "../images/bcg/homeBcg.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader image={image}>hello from home header</HomeHeader>
  </Layout>
)

export default IndexPage
