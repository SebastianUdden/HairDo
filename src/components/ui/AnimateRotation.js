import React, { useState, useEffect } from "react"
import styled from "styled-components"

const AnimateRotation = styled.div`
  transform: ${p =>
    p.animate ? `rotate(0), scale(1)` : `rotate(270deg) scale(0.4)`};
  transition: transform 0.2s;
`

export default ({ children }) => {
  const [animate, setAnimate] = useState(false)
  useEffect(() => {
    setAnimate(true)
  }, [])
  return <AnimateRotation animate={animate}>{children}</AnimateRotation>
}
