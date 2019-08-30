import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { HomeHeader, Banner, BannerButton } from "../utils"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import Gallery from "../components/HomePageComponents/Gallery"
import Menu from "../components/HomePageComponents/Menu"

export default ({ data }) => {
  const { title, address, quickinfo, gallery } = data.markdownRemark.frontmatter
  const image = data.markdownRemark.localImage.childImageSharp.fluid.originalImg
  gallery.image1 = data.markdownRemark.localImage1
  gallery.image2 = data.markdownRemark.localImage2
  gallery.image3 = data.markdownRemark.localImage3

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
      localImage {
        childImageSharp {
          fluid {
            originalImg
          }
        }
      }
      localImage1 {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      localImage2 {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      localImage3 {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
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
