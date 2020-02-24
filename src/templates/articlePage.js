import React from "react"
import Layout from "../components/Layout"
import Step from "../components/ArticlePage/Step"
import Product from "../components/ArticlePage/Product"

export default ({
  pageContext: {
    categories,
    page: { title, description, steps, products },
  },
}) => {
  return (
    <Layout categories={categories}>
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>{steps.title}</h2>
      {steps.values.map((step, index) => (
        <Step step={step} key={index}></Step>
      ))}
      <h2>{products.title}</h2>
      {products.values.map((product, index) => (
        <Product product={product} key={index}></Product>
      ))}
    </Layout>
  )
}
