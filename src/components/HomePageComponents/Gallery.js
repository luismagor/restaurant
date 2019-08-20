import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { styles, Section } from "../../utils"
import Image from "gatsby-image"

const Gallery = () => {
  const {
    allFile: { edges: images },
  } = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Section>
      <GalleryWrapper>
        {images.map(
          (
            {
              node: {
                id,
                name,
                childImageSharp: { fluid: image },
              },
            },
            i
          ) => (
            <div key={id} className={`item item-${i + 1}`}>
              <Image fluid={image} />
              <p className="info">{name}</p>
            </div>
          )
        )}
      </GalleryWrapper>
    </Section>
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  .item {
    position: relative;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one one two"
      "one one three";
    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`

export default Gallery
