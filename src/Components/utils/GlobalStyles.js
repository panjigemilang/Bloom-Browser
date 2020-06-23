import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root {
      --primary: #E6E9EF;
      --secondary: #B8C5D0;
      --dark: #020915;
      --gray: darkslategrey;
      --ternery: #6C9188;
      --quartery: #4A5863;
      --boundary: #D9D0A8;
      --blue-light: #EFF8FF;
      --green-light: #4BD195;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Product Sans', Roboto, Helvetica, Arial, sans-serif;
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all .5s;    
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }

  body::-webkit-scrollbar {
    width: 0.25rem;
  }

  body::-webkit-scrollbar-track {
    background: var(--dark);
  }

  body::-webkit-scrollbar-thumb {
    background: var(--secondary);
  }
  `
