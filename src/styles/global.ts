import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 16px Inter, sans-serif;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  a {
    text-decoration: none;
    color: unset;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    min-height: 100vh;
  }

  h1 {
    @media (max-width: 768px) {
      line-height: 1.5;
    }
  }

  #__next {
    min-height: 100%;
  }
  
`

export const Container = styled.div `
  padding: 0px 12vw;

  @media (max-width: 1024px) {
    padding: 0px 3vw;
  }

  @media (max-width: 768px) {
    padding: 0px 12vw;
  }

`