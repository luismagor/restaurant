import React from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"
import { Link } from "gatsby"

const QuickInfo = ({ quickinfo }) => {
  const { message, title, content } = quickinfo
  return (
    <Section>
      <Title message={message} title={title} />
      <QuickInfoWrapper>
        <p className="text">{content}</p>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <SectionButton style={{ margin: "2rem  auto" }}>about</SectionButton>
        </Link>
      </QuickInfoWrapper>
    </Section>
  )
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default QuickInfo
