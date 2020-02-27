import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Body = styled.div`
  flex: 1 0 auto;
`

export default ({ meta, categories, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return (
    <Wrapper>
      <Header
        meta={{ ...meta, ...site.siteMetaData }}
        categories={categories}
      />
      <Body>{children}</Body>
      <Footer meta={{ ...meta, ...site.siteMetaData }} />
    </Wrapper>
  )
}
