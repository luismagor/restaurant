import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"
import Navbar from "./globals/navbar"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      {children}
    </>
  )
}

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Caveat|Open+Sans:400,400i,700,700i&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  color: #262626;
  background: #fff;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
