import React from "react"
import Image from "../ui/Image"

export default ({ product }) => {
  return (
    <div>
      <Image imageUrl={product.imageUrl} alt={product.title} />
      <p>{product.title}</p>
    </div>
  )
}
