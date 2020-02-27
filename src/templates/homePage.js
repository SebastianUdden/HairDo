import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Hero from "../components/ui/Hero"
import Card from "../components/ui/Card"

const Title = styled.h2`
  text-align: center;
`

const ArticleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default ({ pageContext: { articles, categories, home } }) => {
  return (
    <Layout meta={{ title: "Home" }} categories={categories}>
      <Hero />
      {articles && (
        <>
          <Title>{home.articleGrid.title}</Title>
          <ArticleWrapper>
            {articles.map(({ title, imageUrl, slug }) => (
              <Card title={title} imageUrl={imageUrl} slug={slug} />
            ))}
          </ArticleWrapper>
        </>
      )}
    </Layout>
  )
}
