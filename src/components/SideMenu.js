import React from "react"
import styled from "styled-components"
import NavigationDrawer from "./ui/NavigationDrawer"
import { theme } from "../constants/colors"
import { shadow } from "../constants/shadows"
import Link from "./ui/Link"

const Categories = styled.ul`
  margin: 0;
  padding: 0 1rem;
  li {
    margin: 0;
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
