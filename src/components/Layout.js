import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import SideMenu from "./SideMenu"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Body = styled.div`
  flex: 1 0 auto;
`

export default ({ meta, categories, children }) => {
  const [show, setShow] = useState(false)
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
      <SideMenu
        show={show}
        onToggleSideMenu={() => setShow(!show)}
        categories={categories}
      />
      <Header
        meta={{ ...meta, ...site.siteMetaData }}
        categories={categories}
        onShowSideMenu={() => setShow(true)}
        showSideMenu={show}
      />
      <Body>{children}</Body>
      <Footer meta={{ ...meta, ...site.siteMetaData }} />
    </Wrapper>
  )
}
