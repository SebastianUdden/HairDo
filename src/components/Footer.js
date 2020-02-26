import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { theme } from "../constants/colors"

const Wrapper = styled.div`
  flex-shrink: 0;
  background-color: ${theme.footer.background};
  color: ${theme.footer.text};
  padding: 1rem;
  font-size: small;
`

export default () => {
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
      <p>Created by {site.siteMetadata.author}</p>
    </Wrapper>
  )
}
