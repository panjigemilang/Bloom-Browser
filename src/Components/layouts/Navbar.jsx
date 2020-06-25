import React, { Component } from "react"
import { Link } from "react-router-dom"
import Index from "../../Context/IndexContext"
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
  line-height: 50px;
  margin-left: 15px;

  @media (max-width: 600px) {
    margin: 0 15px;
  }
`

// Nav Button
const NavButton = styled.nav`
  background-color: var(--dark);
  color: white;
  cursor: pointer;
  font-family: "Manjari", sans-serif;
  position: fixed;
  transition: 0.5s;
  width: 100%;
  z-index: 99;

  &:hover {
    transform: translateX(-15px) scale(1.1);
  }

  @media (min-width: 600px) {
    display: none;
  }
`

const UlButton = styled.ul`
  margin: 0;
  padding: 0.84rem 1rem;

  @media (max-width: 768px) {
    padding: 0.14rem 0.3rem;
  }
`

const LiButton = styled.li`
  overflow: hidden;
`

const AButton = styled.a`
  display: block;
  color: white;
  position: relative;
`

const AnimatedIcon = styled.div`
  width: 45px;
  height: 50px;
  position: relative;
  margin-left: auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
`

const AnimatedSpan = styled.span`
  background: #bfbdc4;
  display: block;
  position: absolute;
  height: 5px;
  width: 80%;
  border-radius: 9px;
  opacity: 1;
  left: 5px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;

  @media (max-width: 768px) {
    height: 4px;
    width: 60%;
    left: 9px;
  }
`

const SideNav = styled.div`
  height: 100%;
  margin: 7vh 0;
  min-height: 100vh;
  position: fixed;
  opacity: 0.8;
  overflow: hidden;
  transform: ${({ show }) => (show ? null : "translateX(-100vw)")};
  white-space: nowrap;
  width: 100%;
  z-index: 9998;
  -webkit-transition: 0.7s ease-in-out;
  -moz-transition: 0.7s ease-in-out;
  -o-transition: 0.7s ease-in-out;
  transition: 0.7s ease-in-out;

  @media (min-width: 600px) {
    display: none;
  }

  ul {
    background-color: var(--dark);
    color: var(--primary);
    margin: 0;
    min-height: 100vh;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    font-size: 1.17em;
    height: 15vh;
    padding: 0 10vw;
    -webkit-transition: 0.7s all;
    -moz-transition: 0.7s all;
    -o-transition: 0.7s all;
    transition: 0.7s all;

    a {
      color: var(--primary);
      line-height: 100px;
      text-decoration: none;
    }
  }

  li:nth-child(1) {
    margin-bottom: 15px;
    padding-top: 5vh;

    h3 {
      line-height: 70px;
    }
  }

  li:not(:nth-child(1)):hover {
    background-color: var(--gray);
    color: white;
  }
`

export default class Navbar extends Component {
  static contextType = Index

  state = {
    animatedIcon: false,
  }

  toggleSide() {
    this.setState({
      animatedIcon: !this.state.animatedIcon,
    })
  }

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
                backgroundColor="var(--green-light)"
                borderRadius="2em"
                color="white"
                marginRight="0"
                padding="15px 30px"
              >
                Download
              </Li>
            </Ul>
          </Nav>
        </Container>

        <NavButton>
          <UlButton>
            <LiButton id="profile">
              <AButton onClick={() => this.context.toggleSideNav()}>
                <AnimatedIcon>
                  <AnimatedSpan
                    style={{ top: "11px" }}
                    className={
                      this.context.toggleSide
                        ? "animated-icon1 open"
                        : "animated-icon"
                    }
                  ></AnimatedSpan>
                  <AnimatedSpan
                    style={{ top: "21px" }}
                    className={
                      this.context.toggleSide
                        ? "animated-icon2 open"
                        : "animated-icon"
                    }
                  ></AnimatedSpan>
                  <AnimatedSpan
                    style={{ top: "31px" }}
                    className={
                      this.context.toggleSide
                        ? "animated-icon3 open"
                        : "animated-icon"
                    }
                  ></AnimatedSpan>
                </AnimatedIcon>
              </AButton>
            </LiButton>
          </UlButton>
        </NavButton>
        <SideNav show={this.context.toggleSide ? true : false}>
          <ul>
            <li>
              <LogoContainer src={Logo} alt="Logo" />
              <LogoTitle>BLOOM</LogoTitle>
            </li>
            <li>
              <Link to="/#">Download App</Link>
            </li>
            <li>
              <Link to="/#">Features</Link>
            </li>
            <li>
              <Link to="/#">About Us</Link>
            </li>
            <li>
              <Link to="/#">Download</Link>
            </li>
          </ul>
        </SideNav>
      </div>
    )
  }
}
