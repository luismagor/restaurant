import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { PageHeader, Banner } from "../utils"
import contactImage from "../images/bcg/contactBcg.jpeg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageHeader image={contactImage}>
      <Banner title="contact us" subtitle="let's get in touch"></Banner>
    </PageHeader>
  </Layout>
)

export default ContactPage
