import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { PageHeader } from "../utils"
import aboutImage from "../images/bcg/aboutBcg.jpeg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <PageHeader image={aboutImage}>hello from about</PageHeader>
  </Layout>
)

export default AboutPage
