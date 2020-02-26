import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Card from "../components/ui/Card"
import Container from "../components/ui/Container"

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
    articles = [],
    categories = [],
    page: { title },
  },
}) => {
  return (
    <Layout categories={categories}>
      <Container>
        <Title>{title}</Title>
        <ArticleWrapper>
          {articles.map(({ title, slug, imageUrl }) => (
            <Card title={title} slug={slug} imageUrl={imageUrl}></Card>
          ))}
        </ArticleWrapper>
      </Container>
    </Layout>
  )
}
