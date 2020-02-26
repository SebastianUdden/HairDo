import React from "react"
import styled from "styled-components"
import Image from "./Image"
import { MEDIA_MEDIUM, MEDIA_LARGE, MEDIA_X_LARGE } from "../../constants/sizes"

const Wrapper = styled.div`
  min-height: 15rem;
  width: calc(50% - 12px);
  margin: 6px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  ${MEDIA_MEDIUM} {
    width: calc(33% - 24px);
    margin: 12px;
  }
  ${MEDIA_LARGE} {
    width: calc(25% - 24px);
    margin: 12px;
  }
  ${MEDIA_X_LARGE} {
    width: calc(25% - 24px);
    margin: 12px;
  }
`
const Title = styled.h2`
  text-align: center;
  font-size: medium;
  min-height: 4rem;
`

export default ({ title, imageUrl }) => {
  return (
    <Wrapper>
      <Image imageUrl={imageUrl} alt={title}></Image>
      <Title>{title}</Title>
    </Wrapper>
  )
}
