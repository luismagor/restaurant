import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import Image from "gatsby-image"

const Product = ({ product }) => {
  const { name, price, ingredients, fixed } = product
  // const { fixed } = product.image.childImageSharp

  return (
    <ProductWrapper>
      <Image fixed={fixed} className="image" />
      {/* <img src={product.image} className="image" alt="" /> */}
      <div className="text">
        <div className="product-content">
          <h3 className="name">{name}</h3>
          <h3 className="price">${price}</h3>
        </div>
        <p className="info">{ingredients}</p>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
  }
  .image {
    border-radius: 0.5rem;
  }
  .product-content {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  .name {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }
  .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }
  .info {
    margin-top: 0.5rem;
    word-spacing: 0.2rem;
    text-transform: lowercase;
  }
`

export default Product
