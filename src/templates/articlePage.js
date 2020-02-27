import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Step from "../components/article/Step"
import Image from "../components/ui/Image"
import Card from "../components/ui/Card"
import { MEDIA_MIN_MEDIUM } from "../constants/sizes"
import { theme } from "../constants/colors"
import Container from "../components/ui/Container"

const Title = styled.h1`
  text-transform: uppercase;
`
const Description = styled.p`
  padding: 0 0 1rem 0;
`
const Subtitle = styled.h2`
  text-align: center;
  color: ${theme.articlePage.subtitle};
  text-transform: uppercase;
`
const StepsWrapper = styled.div`
  padding: 1rem 0;
  ${MEDIA_MIN_MEDIUM} {
    margin: 0 10vw;
  }
`
const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export default ({
  pageContext: {
    categories,
    page: { title, imageUrl, description, steps, products },
  },
}) => {
  return (
    <Layout meta={{ title, description }} categories={categories}>
      <Container>
        <Image imageUrl={imageUrl} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <StepsWrapper>
          {steps && (
            <>
              <Subtitle>{steps.title}</Subtitle>
              {steps.values.map(step => (
                <Step step={step}></Step>
              ))}
            </>
          )}
        </StepsWrapper>
        {products && (
          <>
            <Subtitle>{products.title}</Subtitle>
            <ProductsWrapper>
              {products.values.map(product => (
                <Card {...product}></Card>
              ))}
            </ProductsWrapper>
          </>
        )}
      </Container>
    </Layout>
  )
}
