import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LinkWrapper = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: ${p => p.color};
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: ${p => p.color};
`
const HeroImage = styled.div`
  height: 50vh;
  width: 100%;
  background-image: ${p => `url(${p.image})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeroText = styled.div`
  text-align: center;
  text-shadow: 1px 0px #ddd;
`
const Title = styled.h1``
const Subtitle = styled.h2``

export default ({ title, subtitle, slug, imageUrl, color }) => {
  if (slug) {
    return (
      <LinkWrapper to={slug} color={color}>
        <HeroImage image={imageUrl}>
          <HeroText>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </HeroText>
        </HeroImage>
      </LinkWrapper>
    )
  }
  return (
    <Wrapper color={color}>
      <HeroImage image={imageUrl}>
        <HeroText>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </HeroText>
      </HeroImage>
    </Wrapper>
  )
}
