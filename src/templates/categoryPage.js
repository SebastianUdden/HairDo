import React from "react"

export default ({ pageContext: { title } }) => {
  return (
    <div>
      <h1>{title}</h1>
      <a href="/">Home</a>
    </div>
  )
}
