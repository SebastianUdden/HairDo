import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Step from "../components/articlePage/Step"
import Image from "../components/ui/Image"
import Card from "../components/ui/Card"
import { MEDIA_MIN_MEDIUM } from "../constants/sizes"

const Title = styled.h1`
  text-align: center;
`
const Description = styled.p`
  padding: 1rem 0;
`
const Subtitle = styled.h2`
  text-align: center;
`
const StepsWrapper = styled.div`
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
    <Layout categories={categories}>
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
    </Layout>
  )
}
