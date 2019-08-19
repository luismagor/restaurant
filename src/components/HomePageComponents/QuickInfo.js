import React from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { styles } from "../../utils"
import { Link } from "gatsby"

const QuickInfo = () => {
  return (
    <Section>
      <Title message="let us tell you" title="our mission" />
      <QuickInfoWrapper>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque non
          aut quis similique laborum ipsam quas facere atque libero, deleniti
          dolorum. Eius maiores quisquam quam quidem incidunt. A quisquam illo
          eos. Quisquam eum totam animi quaerat explicabo ut exercitationem
          cupiditate, culpa ab recusandae sed consectetur. Inventore eligendi
          nihil voluptate possimus.
        </p>
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
