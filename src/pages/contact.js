import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { PageHeader } from "../utils"
import contactImage from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader image={contactImage}>hello from contact</PageHeader>
  </Layout>
)

export default ContactPage
