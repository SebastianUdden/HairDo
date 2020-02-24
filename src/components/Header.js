import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #ccc;
`
const List = styled.ul``
const ListItem = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
`
const HomeLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
`
const ListLink = ({ to, children }) => <ListItem to={to}>{children}</ListItem>

export default ({ categories = [] }) => (
  <Wrapper>
    <HomeLink to="/">Home</HomeLink>
    <List>
      {categories.map(category => (
        <ListLink to={category.slug}>{category.title}</ListLink>
      ))}
    </List>
  </Wrapper>
)
