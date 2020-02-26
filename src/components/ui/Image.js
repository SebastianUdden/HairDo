import React from "react"
import styled from "styled-components"

const Image = styled.img`
  width: 100%;
  height: ${p => p.height};
  max-height: 70vh;
  object-fit: cover;
`

export default ({ imageUrl, alt, height = "100%" }) => {
  return <Image src={imageUrl} alt={alt} height={height} />
}
