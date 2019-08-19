import React, { useState } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"
import styled from "styled-components"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleNavbar = () => {
    setOpen(isOpen => !isOpen)
  }

  return (
    <NavWrapper>
      <NavbarHeader handleNavbar={handleNavbar} />
      <NavbarLinks navbarOpen={open} />
      <NavbarIcons />
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export default Navbar
