import React from "react"
import Layout from "../components/Layout"

export default ({ pageContext: { title } }) => {
  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  )
}
