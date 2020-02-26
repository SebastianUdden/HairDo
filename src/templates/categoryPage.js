import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Card from "../components/ui/Card"
import Container from "../components/ui/Container"

const MOCK_DATA = [
  {
    title: "ponytail",
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    title: "ponytail 2 ponytail 2 ponytail 2 ponytail 2 ponytail 2 ponytail 2 ponytail 2 ponytail 2",
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    title: "ponytail 3",
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    title: "ponytail 3",
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    title: "ponytail 3",
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    title: "ponytail 3",
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    title: "ponytail 3",
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    title: "ponytail 3",
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    title: "ponytail 3",
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    title: "ponytail 3",
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    title: "ponytail 3",
    imageUrl: "https://picsum.photos/200/200",
  },
]
const Title = styled.h1`
  text-align: center;
`
const ArticleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default ({
  pageContext: {
    categories,
    page: { title },
  },
}) => {
  return (
    <Layout categories={categories}>
      <Container>
        <Title>{title}</Title>
        <ArticleWrapper>
          {MOCK_DATA.map(({ imageUrl, title }) => (
            <Card imageUrl={imageUrl} title={title}></Card>
          ))}
        </ArticleWrapper>
      </Container>
    </Layout>
  )
}
