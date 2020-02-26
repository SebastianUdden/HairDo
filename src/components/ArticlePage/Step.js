import React from "react"
import Image from "../ui/Image"
import Divider from "./Divider"

export default ({ step }) => {
  return (
    <div>
      <h3>{step.title}</h3>
      <Image imageUrl={step.imageUrl} alt={step.title} />
      <p>{step.description}</p>

      <Divider />
    </div>
  )
}
