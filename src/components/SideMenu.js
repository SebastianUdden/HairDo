import React from "react"
import styled from "styled-components"
import NavigationDrawer from "./ui/NavigationDrawer"
import { theme } from "../constants/colors"
import { shadow } from "../constants/shadows"
import Link from "./ui/Link"
import MenuButton from "./ui/MenuButton"

const Heading = styled.h1`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${p => p.border};
  min-height: 3.3rem;
  font-size: x-large;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
`
const Categories = styled.ul`
  margin: 0;
  padding: 0 1rem;
`

const Category = styled.li`
  margin: 1rem 0 0;
  list-style-type: none;
  font-size: large;
`

export default ({ show, onToggleSideMenu, categories = [] }) => {
  return (
    <NavigationDrawer
      boxShadow={shadow}
      color={theme.sideMenu.text}
      backgroundColor={theme.sideMenu.background}
      onHide={onToggleSideMenu}
      show={show}
      buttonElementId="hamburger-menu"
    >
      <Heading color={theme.sideMenu.text} border={theme.sideMenu.border}>
        <span>HairDo</span>
        <MenuButton
          onClick={onToggleSideMenu}
          show={show}
          color={theme.sideMenu.text}
        />
      </Heading>
      <Categories>
        {categories.map(({ slug, hero: { title } }) => (
          <Category key={title}>
            <Link to={slug}>{title}</Link>
          </Category>
        ))}
      </Categories>
    </NavigationDrawer>
  )
}
