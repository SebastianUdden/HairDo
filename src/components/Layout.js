import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import { theme } from "../constants/colors"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Body = styled.div`
  flex: 1 0 auto;
  color: ${theme.body.text};
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
