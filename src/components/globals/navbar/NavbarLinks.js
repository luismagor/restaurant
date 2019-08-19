import React from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import { Link } from "gatsby"

const links = [
  {
    id: 0,
    path: "/",
    name: "home",
  },
  {
    id: 1,
    path: "/about",
    name: "about",
  },
  {
    id: 2,
    path: "/menu",
    name: "menu",
  },
  {
    id: 3,
    path: "/contact",
    name: "contact",
  },
]

const NavbarLinks = ({ navbarOpen }) => {
  return (
    <LinkWrapper open={navbarOpen}>
      {links.map(link => (
        <li key={link.id}>
          <Link to={link.path} className="nav-link">
            {link.name}
          </Link>
        </li>
      ))}
    </LinkWrapper>
  )
}

const LinkWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transition({ time: ".3s" })};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${({ open }) => (open ? "136px" : "0")};
  overflow: hidden;
  ${styles.transDefault};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`

export default NavbarLinks
