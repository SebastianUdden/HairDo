import React from "react"
import Layout from "../components/Layout"

export default ({ pageContext: { categories } }) => {
  return (
    <Layout meta={{ title: "Home" }} categories={categories}>
      <h1>Home</h1>
    </Layout>
  )
}
