import { Link as LinkUI } from "gatsby"
import styled from "styled-components"
import { theme } from "../../constants/colors"

const Link = styled(LinkUI)`
  text-decoration: none;
  color: ${theme.header.text};
  cursor: pointer;
`

export default Link
