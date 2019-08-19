import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { PageHeader, Banner } from "../utils"
import menuImage from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <PageHeader image={menuImage}>
      <Banner title="menu" subtitle="let's dig in"></Banner>
    </PageHeader>
  </Layout>
)

export default MenuPage
