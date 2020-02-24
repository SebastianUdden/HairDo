import React from "react"
import Image from "../ui/Image"

export default ({ step }) => {
  return (
    <div>
      <h3>{step.title}</h3>
      <Image imageUrl={step.imageUrl} alt={step.title} />
      <p>{step.description}</p>
    </div>
  )
}
