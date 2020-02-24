import React from "react"
import Layout from "../components/Layout"

export default ({ pageContext }) => {
  return (
    <Layout>
      <h1>Home</h1>
      <ul>
        {Object.values(pageContext).map(page => (
          <li>
            <a href={page.slug}>{page.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
