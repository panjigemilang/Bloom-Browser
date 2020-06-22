import React, { Component } from "react"
import styled from "styled-components"
import Logo from "../../Assets/vector/Logo.svg"
import { Container } from "../utils/Styled"

const Nav = styled.nav`
  display: flex;

  @media (max-width: 600px) {
    display: none;
  }
`

const Ul = styled.ul`
  display: flex;
  margin-top: 20px;
  width: 100%;
`

const Li = styled.li`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  cursor: pointer;
  display: ${({ display }) => display};
  height: fit-content;
  height: -moz-fit-content; /* Firefox/Gecko */
  height: -webkit-fit-content; /* Chrome */
  list-style: none;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "8%")};
  padding: ${({ padding }) => (padding ? padding : "15px 0")};

  &.active {
    background-color: black;
  }
`

const LogoContainer = styled.img`
  width: 3em;
`

const LogoTitle = styled.h3`
  margin-left: 15px;
`

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Container>
          <Nav>
            <Ul>
              <Li display="flex" marginRight="auto" padding="0">
                <LogoContainer src={Logo} alt="Logo" />
                <LogoTitle>BLOOM</LogoTitle>
              </Li>
              <Li>Download App</Li>
              <Li>Features</Li>
              <Li>About us</Li>
              <Li
                backgroundColor="var(--ternery)"
                borderRadius="2em"
                color="var(--primary)"
                marginRight="0"
                padding="15px 30px"
              >
                Download
              </Li>
            </Ul>
          </Nav>
        </Container>
      </div>
    )
  }
}
