import React from "react"
import styled from "styled-components"

const Image = styled.img`
  width: 100%;
  
`

export default ({ imageUrl, alt }) => {
  return <Image src={imageUrl} alt={alt} />
}
