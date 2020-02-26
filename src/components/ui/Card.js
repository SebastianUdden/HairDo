import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"
import Image from "./Image"
import { MEDIA_MEDIUM, MEDIA_LARGE, MEDIA_X_LARGE } from "../../constants/sizes"
import { DP2, DP6 } from "../../constants/shadows"

const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: black;
  min-height: 15rem;
  width: calc(50% - 12px);
  margin: 6px;
  box-shadow: ${DP2};

  :hover {
    cursor: pointer;
    box-shadow: ${DP6};
  }

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
const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
  min-height: 15rem;
  width: calc(50% - 12px);
  margin: 6px;
  box-shadow: ${DP2};

  :hover {
    cursor: pointer;
    box-shadow: ${DP6};
  }

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

export default ({ title, slug, imageUrl, link }) => {
  if (slug) {
    return (
      <Link to={slug}>
        <Image imageUrl={imageUrl} alt={title}></Image>
        <Title>{title}</Title>
      </Link>
    )
  } else {
    return (
      <ExternalLink href={link} target="_blank">
        <Image imageUrl={imageUrl} alt={title}></Image>
        <Title>{title}</Title>
      </ExternalLink>
    )
  }
}
