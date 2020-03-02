import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import SideMenu from "./SideMenu"
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
const getSubCategories = categories => [
  ...new Set(
    categories.reduce(
      (accumulator, category) => [
        ...accumulator,
        ...(category.subCategories || []),
      ],
      []
    )
  ),
]

const getHeadCategories = (categories, subCategories) =>
  categories
    .filter(category => !subCategories.some(x => x === category.slug))
    .map(category => ({
      ...category,
      subCategories: category.subCategories
        ? categories.filter(x => category.subCategories.some(y => y === x.slug))
        : [],
    }))

export default ({ meta, categories, children }) => {
  const subCategories = getSubCategories(categories)
  const headCategories = getHeadCategories(categories, subCategories)
  console.log({ subCategories })
  console.log({ headCategories })
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
        categories={headCategories}
      />
      <Header
        meta={{ ...meta, ...site.siteMetaData }}
        categories={headCategories}
        onShowSideMenu={() => setShow(true)}
        showSideMenu={show}
      />
      <Body>{children}</Body>
      <Footer meta={{ ...meta, ...site.siteMetaData }} />
    </Wrapper>
  )
}
