import React, { Component } from "react"
import IndexContext from "../../Context/IndexContext"
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
// import Favorite from "../../Assets/vector/Favorite.svg"
import Phone from "../../Assets/vector/Phone.svg"
import GooglePlayButton from "../../Assets/vector/Google-Play-Button.png"
import StepOne from "../../Assets/vector/Step-One.svg"
import StepTwo from "../../Assets/vector/Step-Two.svg"
import StepThree from "../../Assets/vector/Step-Three.svg"

const App = styled.div`
  filter: ${({ blur }) => blur};
  -webkit-filter: ${({ blur }) => blur};
  -webkit-transition: 0.7s ease-in-out;
  -moz-transition: 0.7s ease-in-out;
  -o-transition: 0.7s ease-in-out;
  transition: 0.7s ease-in-out;
`

const TextContainer = styled.div`
  margin: ${({ margin }) => margin};
  position: relative;
  padding: ${({ padding }) => padding};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  @media (max-width: 600px) {
    margin: 5vw;
    order: ${({ order }) => order};
    padding: ${({ mpadding }) => (mpadding ? mpadding : "0 8vw")};

    h2 {
      font-size: 1.17em;
    }
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
    opacity: ${({ opacity }) => opacity};
    width: ${({ width }) => `calc(${width} + 20%)`};
  }
`

const Title = styled.h1`
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "100")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "3em")};

  @media (max-width: 600px) {
    font-size: ${({ fontSize }) =>
      fontSize ? `calc(${fontSize}-${fontSize}/2)` : "2em"};
  }
`

const Description = styled.p`
  color: ${({ color }) => color};
  margin: ${({ margin }) => (margin ? margin : "0 auto")};
  width: ${({ width }) => (width ? width : "55%")};

  @media (max-width: 600px) {
    width: ${({ width }) => (width ? width : "calc(55% + 30%)")};
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;

  &.item1 {
  }
`

export default class Landing extends Component {
  static contextType = IndexContext

  render() {
    return (
      <App blur={this.context.toggleSide ? "blur(8px)" : null} className="app">
        <Section mmargin="10vh 0px 5vh" id="home">
          <Particles src={IconLeft} left="0" />
          <Particles display="none" src={IconRight} right="0" />
          <Particles
            src={Section_1}
            bottom="-10%"
            left="50%"
            opacity=".7"
            transform="translate(-50%, 0)"
            width="50%"
          />
          <Container>
            <TextContainer>
              <Title fontWeight="500">Search. Inspire. Save Lives.</Title>
              <Description>
                Make Bloom your new search engine and donate to charity with
                your searches - for free!
                <br />
                <br />
                Bloom is a free, fast, open - source, web browser. It blocks ads
                and website trackers, and provides a way for users to customize
                their search experience with images that inspire from content
                creators.
                <br />
                <br />
                Users decide what - if any - promoted content they elect to see
                and ad revenue goes to charity.
              </Description>
              <Button
                backgroundColor="#fff"
                border="1px var(--ternery) solid"
                borderRadius="2em"
                color="var(--ternery)"
                margin="6vh 0"
                padding="10px 20px"
              >
                <a
                  href="https://s3.amazonaws.com/download.bloombrowser.com/BloomBrowser.apk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-download" aria-hidden="true"></i>
                  &ensp;Download Bloom
                </a>
              </Button>
            </TextContainer>
          </Container>
        </Section>
        <Section margin="15px 0" id="features">
          <Particles src={DotsParticlesSide} right="0" width="9em" />
          <Container>
            <ContentBox>
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
                  &emsp;Bloom is a free and open-source web browser based on the
                  Chromium web browser. It blocks ads and website trackers, and
                  provides a way for users to earn and donate to charity by
                  simply simply using Bloom like any other browser. Users can
                  block all ads, or replace ads with custom inspiration content
                  they create or from other content creators. User choose what -
                  if any - promoted content they see and share in the revenue
                  generated from private promoted content.
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
                  &emsp;Let’s make things better together! Bloom is an
                  open-source browser project that aims to build a safer,
                  faster, and more fair way for all users to experience the web.
                  View and share design documents, architecture overviews,
                  testing information, and more to help our community build and
                  improve the Bloom source code.
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
                  &emsp;Bloom is a 3rd party ad blocker. It’s our top priority.
                  Bloom fights malware and prevents tracking, keeping your
                  information safe and secure.
                  <br />
                  <br />
                  <strong>We’re not in the personal data business</strong>
                  <br />
                  <br />
                  &emsp;Our servers neither see nor store your browsing data –
                  it stays private, on your devices, until you delete it. Which
                  means we won’t ever sell your data to third parties.
                  <br />
                  <br />
                  <strong>Customize your shield settings</strong>
                  <br />
                  <br />
                  &emsp;Want to block ads? See how many ads and trackers are
                  being blocked by Bloom every day on the New Tab Page. You have
                  control. See no 3rd party ads. Or, see personal custom content
                  you create. Or, see custom content from other creators that
                  inspire you. Or, turn on Bloom Rewards and give a little back
                  to charities you care about most. Earn money for viewing
                  privacy-respecting promoted content you choose through Bloom
                  and help fund the charities you love. Browsing the web with
                  Bloom is FREE: with Bloom Rewards activated, you support the
                  causes you love.
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
              <TextContainer padding="0 8vw 0 5vw" textAlign="left">
                <Title>Non-Profit, Focus on Charity</Title>
                <Description margin="0" width="100% ">
                  Let’s do some good. Together!
                  <br />
                  &emsp;We use the money your searches generate and instead of
                  it going to corporate share holders, we give it to charities
                  you care about. Use Bloom for FREE and see how much your
                  searches generate for charity.
                </Description>
              </TextContainer>
            </ContentBox>
            <ContentBox display="grid" gridColumns="repeat(3, 1fr)">
              <Title style={{ gridColumn: "1 / span 3", textAlign: "center" }}>
                How it Works
              </Title>
              <Div>
                <ImageContainer imgWidth="15em" margin="0 auto">
                  <img src={StepOne} alt="Google Play.png" />
                </ImageContainer>
                <TextContainer margin="20px">
                  <Description margin="0" width="100% ">
                    You search the web with Bloom Browser
                  </Description>
                </TextContainer>
              </Div>
              <Div>
                <ImageContainer imgWidth="15em" margin="0 auto">
                  <img src={StepTwo} alt="Google Play.png" />
                </ImageContainer>
                <TextContainer margin="20px">
                  <Description margin="0" width="100% ">
                    If you choose to see promoted content you choose, income is
                    generated
                  </Description>
                </TextContainer>
              </Div>
              <Div>
                <ImageContainer imgWidth="15em" margin="0 auto">
                  <img src={StepThree} alt="Google Play.png" />
                </ImageContainer>
                <TextContainer margin="20px">
                  <Description margin="0" width="100% ">
                    Bloom donates this income to charity
                  </Description>
                </TextContainer>
              </Div>
            </ContentBox>
          </Container>
        </Section>
        <Section margin="15px 0 0" id="about-us">
          <ContentBox
            backgroundColor="var(--blue-light)"
            display="grid"
            gridColumns="repeat(2, 50%)"
            mmargin="true"
          >
            <TextContainer margin="6vh 6vh 6vh 15vw" textAlign="left">
              <Title fontWeight="900">We know trust has to be earned</Title>
              <Description margin="0" width="100%">
                &ensp;That is why we publish our monthly financial reports and
                charitable receipts. This way we are totally transparent with
                the Bloom community and we do some good. Together!
              </Description>
              <TextContainer mpadding="0" textAlign="left">
                <h2>Download App Now?</h2>
                <ImageContainer
                  cursor="pointer"
                  display="inline-block"
                  imgWidth="8em"
                  margin="0 10px 0 0"
                >
                  <a
                    href="https://s3.amazonaws.com/download.bloombrowser.com/BloomBrowser.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={GooglePlayButton} alt="Google Play.png" />
                  </a>
                </ImageContainer>
              </TextContainer>
            </TextContainer>
            <ImageContainer
              miniDisplay="none"
              position="absolute"
              top="-10%"
              right="30%"
              imgWidth="18em"
            >
              <img src={Phone} alt="Phone.svg" />
            </ImageContainer>
          </ContentBox>
        </Section>
      </App>
    )
  }
}
