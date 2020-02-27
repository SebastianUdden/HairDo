import React from "react"
import styled from "styled-components"
import { theme } from "../../constants/colors"
import { MEDIA_MEDIUM, MEDIA_LARGE, MEDIA_X_LARGE } from "../../constants/sizes"

const Container = styled.div`
  color: ${theme.body.text};
  margin: 0.6rem;
  ${MEDIA_MEDIUM} {
    margin: 0.6rem 10vw;
  }
  ${MEDIA_LARGE} {
    margin: 0.6rem 14vw;
  }
  ${MEDIA_X_LARGE} {
    margin: 0.6rem 18vw;
  }
`
export default ({ children }) => <Container>{children} </Container>
