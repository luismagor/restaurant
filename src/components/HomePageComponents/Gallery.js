import React from "react"
import styled from "styled-components"
import { styles, Section } from "../../utils"
import Image from "gatsby-image"

const Gallery = ({ gallery }) => {
  return (
    <Section>
      <GalleryWrapper>
        <div className={`item item-1`}>
          <Image fluid={gallery.image1.childImageSharp.fluid} />
          <p className="info">{gallery.text1}</p>
        </div>
        <div className={`item item-2`}>
          <Image fluid={gallery.image2.childImageSharp.fluid} />
          <p className="info">{gallery.text2}</p>
        </div>
        <div className={`item item-3`}>
          <Image fluid={gallery.image3.childImageSharp.fluid} />
          <p className="info">{gallery.text3}</p>
        </div>
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
