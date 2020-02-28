import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 0;
  padding: 0;
`

const Scrim = styled.div`
  position: fixed;
  transform: ${p => (p.show ? "translate(0)" : "translateX(-130%)")};
  transition: opacity 1s;
  opacity: ${p => (p.show ? 0.3 : 0)};
  z-index: 90;
  top: 0;
  bottom: 0;
  right: 0;
  left: 20%;
  background-color: ${p => p.backgroundColor};
`

const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  transform: ${p => (p.show ? "translate(0)" : "translateX(-110%)")};
  transition: transform 0.3s;
  z-index: 100;

  top: 0;
  left: 0;
  right: 20%;
  bottom: 0;
  min-height: 100vh;
  color: ${p => p.color};
  background-color: ${p => p.backgroundColor};
  box-shadow: ${p => p.boxShadow};
  overflow-y: scroll;
  opacity: 0.95;
`

const NavigationDrawer = ({
  boxShadow,
  color,
  backgroundColor,
  children,
  onHide,
  show,
}) => (
  <Container>
    <Wrapper
      id="navigation-drawer"
      boxShadow={boxShadow}
      color={color}
      backgroundColor={backgroundColor}
      show={show}
    >
      {children}
    </Wrapper>
    <Scrim onClick={onHide} show={show} backgroundColor={color} />
  </Container>
)

export default NavigationDrawer
