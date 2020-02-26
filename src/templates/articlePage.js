import React from "react"
import Layout from "../components/Layout"
import Step from "../components/articlePage/Step"
import Product from "../components/articlePage/Product"
import Image from "../components/ui/Image"
import Container from "../components/ui/Container"

export default ({
  pageContext: {
    categories,
    page: { title, imageUrl, description, steps, products },
  },
}) => {
  return (
    <Layout categories={categories}>
      <Image imageUrl={imageUrl} alt={title} />
      <Container>
        <h1>{title}</h1>
        <p>{description}</p>
        {steps && (
          <>
            <h2>{steps.title}</h2>
            {steps.values.map((step, index) => (
              <Step step={step} key={index}></Step>
            ))}
          </>
        )}
        {products && (
          <>
            <h2>{products.title}</h2>
            {products.values.map((product, index) => (
              <Product product={product} key={index}></Product>
            ))}
          </>
        )}
      </Container>
    </Layout>
  )
}
