import React from "react"
import Layout from "../components/Layout"

export default ({
  pageContext: {
    categories,
    page: { title },
  },
}) => {
  return (
    <Layout categories={categories}>
      <h1>{title}</h1>
    </Layout>
  )
}
