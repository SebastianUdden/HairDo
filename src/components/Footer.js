import React from "react"
import styled from "styled-components"
import { theme } from "../constants/colors"

const Wrapper = styled.div`
  flex-shrink: 0;
  background-color: ${theme.footer.background};
  color: ${theme.footer.text};
  padding: 1rem;
`

export default () => <Wrapper>Footer</Wrapper>
