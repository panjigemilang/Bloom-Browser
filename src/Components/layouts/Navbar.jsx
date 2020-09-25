import React, { Component } from "react"
import Index from "../../Context/IndexContext"
import styled from "styled-components"
import Logo from "../../Assets/vector/Logo.svg"
import { Container } from "../utils/Styled"

const Nav = styled.nav`
  display: flex;
  height: 50px;
  position: relative;
  z-index: 99;
  /* height: -moz-fit-content; 
  height: -webkit-fit-content; */

  @media (max-width: 600px) {
    display: none;
  }
`

const Ul = styled.ul`
  display: flex;
  height: 50px;
  /* height: -moz-fit-content; 
  height: -webkit-fit-content; */
  margin-top: 20px;
  width: 100%;
`

const Li = styled.li`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  cursor: pointer;
  display: ${({ display }) => display};
  height: 50px;
  /* height: -moz-fit-content; 
  height: -webkit-fit-content; */
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
  margin: 0;
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

  li,
  a {
    line-height: 100px;
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

  scrollToElements = (element, media = "desktop") => {
    let dom, y, yOffset

    if (media === "mobile") {
      yOffset = -50
      this.context.toggleSideNav()
    }

    const scrollTo = (dom, yOffset) => {
      y = dom.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
    }

    dom = document.querySelector(`#${element}`)
    return scrollTo(dom, yOffset)
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
              <Li>
                <a
                  href="https://s3.amazonaws.com/download.bloombrowser.com/BloomBrowser.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download App
                </a>
              </Li>
              <Li onClick={() => this.scrollToElements("features")}>
                Features
              </Li>
              <Li onClick={() => this.scrollToElements("about-us")}>
                About us
              </Li>
              <Li
                backgroundColor="var(--green-light)"
                borderRadius="2em"
                color="white"
                marginRight="0"
                padding="15px 30px"
              >
                <a
                  href="https://s3.amazonaws.com/download.bloombrowser.com/BloomBrowser.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
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
              <a
                href="https://s3.amazonaws.com/download.bloombrowser.com/BloomBrowser.apk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download App
              </a>
            </li>
            <li onClick={() => this.scrollToElements("features", "mobile")}>
              Features
            </li>
            <li onClick={() => this.scrollToElements("about-us", "mobile")}>
              About Us
            </li>
          </ul>
        </SideNav>
      </div>
    )
  }
}
