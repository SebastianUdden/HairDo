import React from "react"
import styled from "styled-components"
import { MEDIA_MIN_MEDIUM } from "../../constants/sizes"

const Button = styled.button`
  background-color: inherit;
  color: inherit;
  border: none;
  :hover {
    cursor: pointer;
  }
  span {
    position: absolute;
    text-indent: -200rem;
  }
  display: initial;
  ${MEDIA_MIN_MEDIUM} {
    display: none;
  }
`
const SVG = styled.svg`
  display: block;
  width: 2.38em;
  height: 2.38em;
  margin: 0.25em;
  stroke-width: 5;
  stroke-linecap: square;
  stroke: ${p => p.color};
  transition: stroke 0.35s ease-out, transform 0.35s ease-in-out;
  transform: ${p => (p.show ? "rotate(225deg)" : "rotate(0)")};
  path {
    backface-visibility: hidden;
    transition: opacity 0.35s ease-in-out, transform 0.35s ease-in-out;
  }
  .x {
    opacity: ${p => (p.show ? 1 : 0)};
  }
  .h {
    opacity: ${p => (p.show ? 0 : 1)};
  }
`

export default ({ onClick, show, color }) => (
  <Button id="menu" aria-pressed={show} onClick={onClick}>
    <SVG
      width="38"
      height="38"
      viewBox="0 0 38 38"
      xmlns="https://www.w3.org/2000/svg"
      show={show}
      color={color}
    >
      <title>Open</title>
      <path className="h t" d="M10.5 10l17 0" />
      <path d="M10.5 19l17 0" />
      <path className="h b" d="M10.5 28l17 0" />
      <path className="x" d="M19 10.5l0 17" />
    </SVG>
    <span>Menu</span>
  </Button>
)

// BUTTON
/* display: block;
  position: relative;
  padding: 0;
  background-color: rgba(250, 250, 253, 1);
  border: 1px solid rgba(250, 250, 253, 1);
  border-radius: 50%;
  box-shadow: 0 0.25em 0.25em rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.8s ease-out, background-color 0.8s ease-out;
  :hover,
  :focus {
    background-color: #fff;
    box-shadow: 0 0.5em 0.5em rgba(0, 0, 0, 0.4);
    ${SVG} {
      stroke: #418cec;
    }
  }
  :active {
    background-color: #fff;
    box-shadow: none;
  } */

/* Optional circle */
/* ::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
    border-radius: 50%;
  } */

// SVG
/* display: block;
  width: 2.38em;
  height: 2.38em;
  margin: 0.25em;
  stroke-width: 5;
  stroke-linecap: square;
  stroke: #d9e4f6;
  transition: stroke 0.8s ease-out, transform 0.8s ease-in-out; */
