import React, { Component } from "react"
import styled from "styled-components"
import {
  Button,
  Container,
  ContentBox,
  ImageContainer,
  Section,
} from "../utils/Styled"

// Import assets
import IconLeft from "../../Assets/vector/Icon-Group-Left.png"
import IconRight from "../../Assets/vector/Icon-Group-Right.svg"
import Section_1 from "../../Assets/vector/Section-1.png"
import Circle from "../../Assets/vector/Circle.svg"
import DotsParticlesBottom from "../../Assets/vector/Dots-Particle-Bottom.svg"
import DotsParticlesSide from "../../Assets/vector/Dots-Particle-Side.png"
import Browser from "../../Assets/vector/Browser.svg"
import OpenSource from "../../Assets/vector/Open-Source.svg"
import AdsBlocker from "../../Assets/vector/Ads-Blocker.svg"
import Charity from "../../Assets/vector/Charity.svg"
import Favorite from "../../Assets/vector/Favorite.svg"
import Phone from "../../Assets/vector/Phone.svg"
import GooglePlayButton from "../../Assets/vector/Google-Play-Button.png"
import AppStoreButton from "../../Assets/vector/App-Store-Button.png"

const TextContainer = styled.div`
  flex-grow: 1;
  margin: ${({ margin }) => margin};
  position: relative;
  padding: ${({ padding }) => padding};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  @media (max-width: 600px) {
    order: ${({ order }) => order};
    padding: 0 8vw;
  }
`

const Particles = styled.img`
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  position: absolute;
  transform: ${({ transform }) => transform};
  -ms-transform: ${({ transform }) => transform};
  -moz-transform: ${({ transform }) => transform};
  -webkit-transform: ${({ transform }) => transform};
  width: ${({ width }) => width};

  @media (max-width: 600px) {
    display: ${({ display }) => display};
    width: ${({ width }) => `calc(${width} + 20%)`};
  }
`

const Title = styled.h1`
  color: ${({ color }) => color};
  font-weight: 100;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "3em")};
`

const Description = styled.p`
  color: ${({ color }) => color};
  margin: ${({ margin }) => (margin ? margin : "0 auto")};
  width: ${({ width }) => (width ? width : "55%")};

  @media (max-width: 600px) {
    width: ${({ width }) => (width ? width : "calc(55% + 30%)")};
  }
`

export default class Landing extends Component {
  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <Section>
          <Particles src={IconLeft} left="0" />
          <Particles display="none" src={IconRight} right="0" />
          <Particles
            src={Section_1}
            bottom="0"
            left="50%"
            transform="translate(-50%, 0)"
            width="50%"
          />
          <Container>
            <TextContainer>
              <Title>Save life by Search.</Title>
              <Description>
                We are helping people out there who are affected by covid-19
                from advertisements on this browser by building various health
                facilities, medicines and food aid for thos in need.
              </Description>
              <Button
                backgroundColor="#fff"
                border="1px var(--ternery) solid"
                borderRadius="2em"
                color="var(--ternery)"
                margin="6vh 0"
                padding="10px 20px"
              >
                <i className="fa fa-download" aria-hidden="true"></i>
                &ensp;Download Bloom on Mac OS
              </Button>
            </TextContainer>
          </Container>
        </Section>
        <Section margin="15px 0">
          <Particles src={DotsParticlesSide} right="0" width="9em" />
          <Container>
            <ContentBox margin="25vh 0">
              <TextContainer
                order="2"
                padding="0 5vw 0 8vw"
                textAlign="justify"
              >
                <Particles
                  src={DotsParticlesBottom}
                  transform="translateY(-10vh)"
                  width="7em"
                />
                <Title>Browser</Title>
                <Description margin="0" width="100%">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Description>
              </TextContainer>
              <ImageContainer>
                <img src={Browser} alt="Browser.svg" />
              </ImageContainer>
            </ContentBox>
            <ContentBox>
              <ImageContainer>
                <img src={OpenSource} alt="Open Source.svg" />
              </ImageContainer>
              <TextContainer padding="0 8vw 0 5vw" textAlign="justify">
                <Title>Open Source</Title>
                <Description margin="0" width="100% ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Description>
              </TextContainer>
            </ContentBox>
            <Particles
              src={Circle}
              left="0"
              transform="translate(-7vw, -20vh)"
              width="12em"
            />
            <ContentBox>
              <TextContainer
                order="2"
                padding="0 5vw 0 8vw"
                textAlign="justify"
              >
                <Title>3rd Party Ads Blocker</Title>
                <Description margin="0" width="100% ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Description>
              </TextContainer>
              <ImageContainer>
                <Particles
                  src={DotsParticlesBottom}
                  transform="translateY(-12vh)"
                  width="7em!important"
                />
                <img src={AdsBlocker} alt="Ads Blocker.svg" />
              </ImageContainer>
            </ContentBox>
            <ContentBox>
              <ImageContainer>
                <img src={Charity} alt="Charity.svg" />
              </ImageContainer>
              <TextContainer padding="0 8vw 0 5vw" textAlign="justify">
                <Title>Non-Profit, Focus on Charity</Title>
                <Description margin="0" width="100% ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Description>
              </TextContainer>
            </ContentBox>
            <ContentBox>
              <TextContainer
                order="2"
                padding="0 5vw 0 8vw"
                textAlign="justify"
              >
                <Particles
                  src={DotsParticlesBottom}
                  transform="translateY(-12vh)"
                  width="7em"
                />
                <Title>User Favorite</Title>
                <Description margin="0" width="100% ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Description>
              </TextContainer>
              <Particles
                src={Circle}
                right="0"
                transform="translate(7vw, -20vh)"
                width="12em"
              />
              <ImageContainer>
                <img src={Favorite} alt="Favorite.svg" />
              </ImageContainer>
            </ContentBox>
          </Container>
        </Section>
        <Section margin="15px 0">
          <ContentBox backgroundColor="var(--primary)">
            <TextContainer margin="6vh" padding="0 20vw" textAlign="justify">
              <Title>Try Bloom Browser on Your Smartphone</Title>
              <Description margin="0" width="100% ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
              </Description>
              <TextContainer textAlign="left">
                <h2>Download App Now?</h2>
                <ImageContainer
                  cursor="pointer"
                  display="inline-block"
                  imgWidth="8em"
                  margin="0 10px 0 0"
                >
                  <img src={GooglePlayButton} alt="Google Play.png" />
                </ImageContainer>
                <ImageContainer
                  cursor="pointer"
                  display="inline-block"
                  imgWidth="8em"
                >
                  <img src={AppStoreButton} alt="Apps Store.png" />
                </ImageContainer>
              </TextContainer>
            </TextContainer>
            <ImageContainer
              miniDisplay="none"
              position="absolute"
              top="-4%"
              right="50%"
              imgWidth="18em"
              width="100%"
            >
              <img src={Phone} alt="Phone.svg" />
            </ImageContainer>
          </ContentBox>
        </Section>
      </div>
    )
  }
}
