import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SEO from "./Seo"
import Link from "./ui/Link"
import { theme } from "../constants/colors"
import MenuButton from "./ui/MenuButton"
import Search from "./ui/Search"
import { MEDIA_MIN_MEDIUM } from "../constants/sizes"
import Container from "./ui/Container"
import SVG from "./ui/SVG"
import search from "../svgs/search"
import AnimateRotation from "./ui/AnimateRotation"

const Wrapper = styled.div`
  background-color: ${theme.header.background};
  color: ${theme.header.text};
  top: 0;
  position: sticky;
  transform: ${p => (p.show ? "translateY(0%)" : "translateY(-100%)")};
  transition: transform 0.4s;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.3rem;
`
const LeftHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const List = styled.ul`
  display: none;
  ${MEDIA_MIN_MEDIUM} {
    display: initial;
  }
`

const ListItem = styled(Link)`
  margin-left: 1rem;
`
const HomeLink = styled(Link)`
  font-size: 24px;
`
const SearchButton = styled.button`
  padding: 0.7rem;
  background-color: inherit;
  border: none;
`
const ListLink = ({ to, children }) => <ListItem to={to}>{children}</ListItem>

export default ({ meta, onShowSideMenu, showSideMenu, categories = [] }) => {
  const [showSearch, setShowSearch] = useState(false)
  const [value, setValue] = useState("")
  let [position, setPosition] = useState(0)
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
      <Container>
        {showSearch && (
          <Search
            value={value}
            previousSearchValue=""
            onChange={e => setValue(e.target.value)}
            onClose={() => {
              setShowSearch(false)
              setValue("")
            }}
            onSubmit={() => alert(`Search for ${value}`)}
          />
        )}
        {!showSearch && (
          <Header>
            <SEO {...meta} />
            <LeftHeader>
              <MenuButton
                onClick={onShowSideMenu}
                show={showSideMenu}
                color={theme.header.text}
              />
              <HomeLink to="/">HairDo</HomeLink>
            </LeftHeader>
            <List>
              {categories.map(({ slug, hero: { title } }) => (
                <ListLink key={title} to={slug}>
                  {title}
                </ListLink>
              ))}
            </List>
            <SearchButton onClick={() => setShowSearch(true)}>
              <AnimateRotation>
                <SVG {...search} />
              </AnimateRotation>
            </SearchButton>
          </Header>
        )}
      </Container>
    </Wrapper>
  )
}
