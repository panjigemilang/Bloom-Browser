import React from "react"
import Logo from "../../Assets/vector/Logo-Text.svg"
import styled from "styled-components"
import { Container, ContentBox, ImageContainer } from "../utils/Styled"

const TextContainer = styled.div`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: 100%;

  @media (max-width: 600px) {
    order: ${({ order }) => order};
  }
`

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-flow: row wrap;
`

const Ul = styled.ul`
  display: flex;
`

const Li = styled.li`
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  list-style: none;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "8%")};
  transition: 0.5s all;
  -o-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -webkit-transition: 0.5s all;

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`

export default function Footer() {
  return (
    <footer>
      <Container>
        <ContentBox
          borderTop="1px var(--secondary) solid"
          margin="0"
          padding="5vh 5vw"
        >
          <ImageContainer display="flex" imgWidth="9em" width="40%">
            <img src={Logo} alt="Logo.png" />
          </ImageContainer>
          <TextContainer>
            <h4>Quick Link</h4>
            <Ul>
              <Li>Feature</Li>
              <Li>Terms & Condition</Li>
            </Ul>
            <Ul>
              <Li>About</Li>
              <Li>QNA</Li>
            </Ul>
          </TextContainer>
        </ContentBox>
      </Container>
    </footer>
  )
}
