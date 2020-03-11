import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { theme } from "../../constants/colors"
import close from "../../svgs/close"
import SVG from "./SVG"
import useKeyPress from "../../hooks/keyPress"
import AnimateRotation from "./AnimateRotation"
import { MEDIA_MIN_MEDIUM } from "../../constants/sizes"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.search.background};
  color: ${theme.search.text};
  border-bottom: 2px solid ${theme.search.border};
  ${MEDIA_MIN_MEDIUM} {
    border-top: 2px solid ${theme.search.border};
  }
`

const Input = styled.input`
  padding: 1rem 0.9rem 1.05rem;
  font-size: medium;
  width: 100%;
  border: none;
  outline: none;
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  ${MEDIA_MIN_MEDIUM} {
    padding: 1rem 0.9rem;
  }
`

const Close = styled.button`
  padding: 0.2rem 0.7rem 0;
  font-size: x-large;
  color: ${theme.search.text};
  background-color: inherit;
  border: none;
`
const onSubmit = value => console.log({ value })

const Search = ({ previousSearchValue, value, onChange, onClose, minimal }) => {
  const [animate, setAnimate] = useState(false)
  const enter = useKeyPress("Enter")

  useEffect(() => {
    setAnimate(true)
    document.getElementById("Search").focus()
  }, [])

  useEffect(() => {
    if (!enter) return
    onSubmit(value)
  }, [enter, value])

  return (
    <Wrapper>
      <Input
        id="Search"
        type="search"
        placeholder="Search"
        previousSearchValue={previousSearchValue}
        value={value}
        onChange={onChange}
        animate={animate}
        minimal={minimal}
      />
      <Close onClick={onClose}>
        <AnimateRotation>
          <SVG {...close} color={theme.search.text} />
        </AnimateRotation>
      </Close>
    </Wrapper>
  )
}

export default Search
