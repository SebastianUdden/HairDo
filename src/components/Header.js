import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SEO from "./Seo"
import Link from "./ui/Link"
import { theme } from "../constants/colors"
import MenuButton from "./ui/MenuButton"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: ${theme.header.background};
  color: ${theme.header.text};
  top: 0;
  position: sticky;
  transform: ${p => (p.show ? "translateY(0%)" : "translateY(-100%)")};
  transition: transform 0.4s;
`
const LeftHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const List = styled.ul``

const ListItem = styled(Link)`
  margin-left: 1rem;
`
const HomeLink = styled(Link)`
  margin-left: 0.5rem;
  font-size: 24px;
`
const ListLink = ({ to, children }) => <ListItem to={to}>{children}</ListItem>

export default ({ meta, onShowSideMenu, showSideMenu, categories = [] }) => {
  let [position, setPosition] = useState(0)
  let [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      let tempPosition = window.pageYOffset

      if (position > 100) {
        setVisible(position > tempPosition)
      } else {
        setVisible(true)
      }
      setPosition(tempPosition)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  return (
    <Wrapper show={visible}>
      <SEO {...meta} />
      <LeftHeader>
        <MenuButton onClick={onShowSideMenu} active={showSideMenu} color={theme.header.text} />
        <HomeLink to="/">HairDo</HomeLink>
      </LeftHeader>
      <List>
        {categories.map((category, index) => (
          <ListLink key={index} to={category.slug}>
            {category.title}
          </ListLink>
        ))}
      </List>
    </Wrapper>
  )
}
