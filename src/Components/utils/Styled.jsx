import styled from "styled-components"

export const Button = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  color: ${({ color }) => color};
  cursor: pointer;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`

export const ContentBox = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-top: ${({ borderTop }) => borderTop};
  display: ${({ display }) => (display ? display : "flex")};
  grid-template-columns: ${({ gridColumns }) => gridColumns};

  margin: ${({ margin }) => (margin ? margin : "15vh 0")};
  padding: ${({ padding }) => padding};

  @media (max-width: 600px) {
    margin: ${({ mmargin }) => (mmargin ? 0 : "15vh 0")};
    flex-direction: column;
    grid-template-columns: 1fr;

    h1 {
      grid-column: unset !important;
    }
  }
`

export const ImageContainer = styled.div`
  cursor: ${({ cursor }) => cursor};
  display: ${({ display }) => display};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  position: relative;
  width: ${({ width }) => width};

  h3 {
    margin-left: 15px;
  }

  img {
    top: ${({ top }) => top};
    right: ${({ right }) => right};
    position: ${({ position }) => position};
    width: ${({ imgWidth }) => (imgWidth ? imgWidth : "24em")};
  }

  @media (max-width: 600px) {
    img {
      display: ${({ miniDisplay }) => miniDisplay};
      width: ${({ imgWidth }) => (imgWidth ? imgWidth : "18em")};
    }
  }
`

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const Section = styled.section`
  margin: ${({ margin }) => margin};
  min-height: 90vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    margin: ${({ mmargin }) => mmargin};
    min-height: 80vh;
  }
`

export const lightTheme = {
  body: "#FFF",
  text: "var(--dark)",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
}

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
}
