import styled from "styled-components";

export const InstitutionalPageStyles = styled.div `
  min-height: 100vh;
  padding-bottom: 80px;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
`

export const InstitutionalContent = styled.div `
  width: 100%;
  height: 1000px;
  background: white;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 50px;
  color: #0a0a0a;

  h1 {
    font-size: 30px;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 25px;
  }

  li::before {
    content: "•"; 
    color: ${props => props.theme.buttons.primary};
    display: inline-block; width: 1em;
    margin-left: -1em
  }
`