import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { theme } from "../constants/colors"
import { MEDIA_MEDIUM, MEDIA_LARGE, MEDIA_X_LARGE } from "../constants/sizes"
import SideMenu from "./SideMenu"

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

export default ({ meta, categories, children }) => {
  const [hide, setHide] = useState(true)
  const [isOpening, setIsOpening] = useState(false)
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
      <SideMenu isOpening={isOpening} hide={hide} setHide={setHide} />
      <Header
        meta={{ ...meta, ...site.siteMetaData }}
        categories={categories}
        onShowSideMenu={() => {
          setIsOpening(true)
          setTimeout(() => setHide(false), 100)
          setTimeout(() => setIsOpening(false), 300)
        }}
        showSideMenu={!hide}
      />
      <Body>{children}</Body>
      <Footer meta={{ ...meta, ...site.siteMetaData }} />
    </Wrapper>
  )
}
