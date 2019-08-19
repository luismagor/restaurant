import React from "react"
import styled from "styled-components"
import defImage from "../images/bcg/homeBcg.jpeg"

const HomeHeader = ({ image, children }) => {
  return <IndexHeader image={image}>{children}</IndexHeader>
}

const PageHeader = ({ image, children }) => {
  return <DefaultHeader image={image}>{children}</DefaultHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 55.78px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.image}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DefaultHeader = styled(IndexHeader)`
  min-height: 60vh;
`

HomeHeader.defaultProps = {
  image: defImage,
}

PageHeader.defaultProps = {
  image: defImage,
}

export { HomeHeader, PageHeader }
