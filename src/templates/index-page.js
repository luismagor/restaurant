import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { HomeHeader, Banner, BannerButton } from "../utils"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import Gallery from "../components/HomePageComponents/Gallery"
import Menu from "../components/HomePageComponents/Menu"

export default ({ data }) => {
  const {
    title,
    address,
    image,
    quickinfo,
    gallery,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title="Home" />
      <HomeHeader image={image}>
        <Banner title={title} subtitle={address}>
          <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
        </Banner>
      </HomeHeader>
      <QuickInfo quickinfo={quickinfo} />
      <Gallery gallery={gallery} />
      <Menu />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        address
        image
        quickinfo {
          message
          title
          content
        }
        gallery {
          image1
          text1
          image2
          text2
          image3
          text3
        }
      }
    }
  }
`
