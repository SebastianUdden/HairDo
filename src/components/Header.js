import React, {useEffect, useState} from "react"
import styled from "styled-components"
import Link from "./Link"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #ccc;
  top: 0;
  position: sticky;
  transform: ${p => (p.show ? "translateY(0%)" : "translateY(-100%)")};
  transition: transform 0.4s;
`
const List = styled.ul``

const ListItem = styled(Link)`
  margin-left: 1rem;
`
const HomeLink = styled(Link)`
  font-size: 24px;
`
const ListLink = ({ to, children }) => <ListItem to={to}>{children}</ListItem>

export default ({ categories = [] }) => {
  if (typeof window === "undefined") return null;
  let [position, setPosition] = useState(window.pageYOffset)
  let [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      let tempPosition = window.pageYOffset

      if (position > 100) {
        setVisible(position > tempPosition)
      } else {
        setVisible(true)
      }
      setPosition(tempPosition)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  return (
    <Wrapper show={visible}>
      <HomeLink to="/">Home</HomeLink>
      <List>
        {categories.map((category, index) => (
          <ListLink key={index} to={category.slug}>{category.title}</ListLink>
        ))}
      </List>
    </Wrapper>
  )
}
