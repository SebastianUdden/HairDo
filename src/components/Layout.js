import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import { theme } from "../constants/colors"
import { MEDIA_MEDIUM, MEDIA_LARGE, MEDIA_X_LARGE } from "../constants/sizes"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Body = styled.div`
  flex: 1 0 auto;
  color: ${theme.body.text};
  margin: 0.6rem;
  ${MEDIA_MEDIUM} {
    margin: 0.6rem 10vw;
  }
  ${MEDIA_LARGE} {
    margin: 0.6rem 14vw;
  }
  ${MEDIA_X_LARGE} {
    margin: 0.6rem 18vw;
  }
`

export default ({ categories, children }) => {
  return (
    <Wrapper>
      <Header categories={categories} />
      <Body>{children}</Body>
      <Footer />
    </Wrapper>
  )
}
