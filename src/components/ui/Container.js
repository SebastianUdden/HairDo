import React from "react"
import styled from "styled-components"
import { MEDIA_MEDIUM, MEDIA_LARGE, MEDIA_X_LARGE } from "../../constants/sizes"

const Container = styled.div`
  margin: 0;
  ${MEDIA_MEDIUM} {
    margin: 0 10vw;
  }
  ${MEDIA_LARGE} {
    margin: 0 14vw;
  }
  ${MEDIA_X_LARGE} {
    margin: 0 18vw;
  }
`
export default ({ children }) => <Container>{children} </Container>
