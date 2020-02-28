import React from "react"
import styled from "styled-components"
import NavigationDrawer from "./ui/NavigationDrawer"
import { theme } from "../constants/colors"
import { shadow } from "../constants/shadows"

export default ({ isOpening, hide, setHide }) => {
  return (
    <NavigationDrawer
      boxShadow={shadow}
      color={theme.sideMenu.text}
      backgroundColor={theme.sideMenu.background}
      onHide={() => !isOpening && setHide(true)}
      hide={hide}
      buttonElementId="hamburger-menu"
    >
      <h1>Menu</h1>
    </NavigationDrawer>
  )
}
