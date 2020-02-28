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
  color: black;
  border-bottom: 1px solid black;
  min-height: 3.3rem;
  font-size: x-large;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
`
const Categories = styled.ul`
  margin: 00;
  padding: 0 1rem;
  li {
    margin: 1rem 0 0;
  }
`

export default ({ isOpening, hide, setHide, categories = [] }) => {
  return (
    <NavigationDrawer
      boxShadow={shadow}
      color={theme.sideMenu.text}
      backgroundColor={theme.sideMenu.background}
      onHide={() => !isOpening && setHide(true)}
      hide={hide}
      buttonElementId="hamburger-menu"
    >
      <Heading>
        <span>HairDo</span>
        <MenuButton onClick={() => setHide(true)} active={!hide} />
      </Heading>
      <Categories>
        {categories.map(({ slug, title }) => (
          <li>
            <Link to={slug}>{title}</Link>
          </li>
        ))}
      </Categories>
    </NavigationDrawer>
  )
}
