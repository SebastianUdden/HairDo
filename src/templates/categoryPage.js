import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Card from "../components/ui/Card"
import Container from "../components/ui/Container"
import Hero from "../components/ui/Hero"

const ArticleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0.6rem 0;
`

export default ({
  pageContext: {
    articles = [],
    categories = [],
    page: { title, description, hero },
  },
}) => {
  return (
    <Layout meta={{ title, description }} categories={categories}>
      <Hero {...hero} />
      <Container>
        <ArticleWrapper>
          {articles.map(({ title, slug, imageUrl }) => (
            <Card
              key={title}
              title={title}
              slug={slug}
              imageUrl={imageUrl}
            ></Card>
          ))}
        </ArticleWrapper>
      </Container>
    </Layout>
  )
}
