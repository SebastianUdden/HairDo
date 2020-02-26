import React from "react"
import styled from "styled-components"
import { theme } from "../../constants/colors"

const Divider = styled.hr`
  width: 5rem;
  margin: 2rem auto;
  border: 1px solid ${theme.articlePage.divider};
`
export default () => <Divider />
