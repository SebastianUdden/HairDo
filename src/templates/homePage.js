import React from "react"

export default ({ pageContext }) => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {Object.values(pageContext).map(page => (
          <li>
            <a href={page.slug}>{page.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
