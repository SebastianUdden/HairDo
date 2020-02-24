import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
  border: 1px solid red;
`
const List = styled.ul``
const ListLink = ({ to, children }) => <Link to={to}>{children}</Link>

export default ({ categories = [] }) => (
  <Wrapper>
    <Link to="/">Home</Link>
    <List>
      {categories.map(category => (
        <ListLink to={category.slug}>{category.title}</ListLink>
      ))}
    </List>
  </Wrapper>
)
