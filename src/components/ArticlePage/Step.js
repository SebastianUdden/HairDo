import React from "react"

export default ({ step }) => {
  return (
    <div>
      <p>{step.title}</p>
      <p>{step.description}</p>
    </div>
  )
}
