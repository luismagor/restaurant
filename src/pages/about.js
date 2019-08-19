import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { PageHeader, Banner } from "../utils"
import aboutImage from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader image={aboutImage}>
      <Banner title="about us" subtitle="a little about us"></Banner>
    </PageHeader>
  </Layout>
)

export default AboutPage
