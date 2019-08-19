import React from "react"
import styled from "styled-components"
import { styles } from "../../utils"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"

const icons = [
  {
    id: 0,
    icon: <FaFacebook className="icon facebook-icon" />,
    path: `https://facebook.com`,
  },
  {
    id: 2,
    icon: <FaTwitter className="icon twitter-icon" />,
    path: `https://twitter.com`,
  },
  {
    id: 3,
    icon: <FaInstagram className="icon instagram-icon" />,
    path: `https://instagram.com`,
  },
]

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="title">eatery</div>
      <div className="icons">
        {icons.map(icon => (
          <a
            key={icon.id}
            href={icon.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </a>
        ))}
      </div>
      <p className="copyright">
        copyright &copy; {new Date().getFullYear().toString()} eatery
      </p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({ time: ".3s" })};
    :hover {
      color: ${styles.colors.mainYellow};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainYellow};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5 rem;
    ${styles.border({ color: `${styles.colors.mainYellow}` })};
  }
`

export default Footer
