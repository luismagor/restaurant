import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { PageHeader } from "../utils"
import menuImage from "../images/bcg/menuBcg.jpeg"

const MenuPage = () => (
  <Layout>
    <SEO title="Menu" />
    <PageHeader image={menuImage}>hello from menu</PageHeader>
  </Layout>
)

export default MenuPage
