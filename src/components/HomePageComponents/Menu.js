import React from "react"
import Product from "./Product"
import { useStaticQuery, graphql } from "gatsby"
import { Section, Title } from "../../utils"
import styled from "styled-components"

const Menu = () => {
  const {
    menu: { edges },
  } = useStaticQuery(graphql`
    {
      menu: allMarkdownRemark(
        filter: { frontmatter: { collectionType: { eq: "menu-entries" } } }
      ) {
        edges {
          node {
            id
            localImage {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
            frontmatter {
              name
              ingredients
              price
              image
            }
          }
        }
      }
    }
  `)

  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <ProductList>
        {edges.map(({ node }) => {
          node.frontmatter.image = node.localImage
          return <Product key={node.id} product={node.frontmatter} />
        })}
      </ProductList>
    </Section>
  )
}

const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

export default Menu
