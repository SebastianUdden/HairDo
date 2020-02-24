import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

const Wrapper = styled.div``

export default ({ categories, children }) => {
  return (
    <Wrapper>
      <Header categories={categories} />
      {children}
      <Footer />
    </Wrapper>
  )
}
