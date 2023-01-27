import styled from "styled-components";

export const InstitutionalPageStyles = styled.div `
  min-height: 100vh;
  padding-bottom: 80px;

  
  @media (max-width: 768px) {
      padding-bottom: 0px;
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
      padding: 0px;
    }
  }
`

export const InstitutionalContent = styled.div `
  width: 100%;
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

    @media (max-width: 768px) {
      font-size: 24px;
      text-align: center; 
    }
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

  @media (max-width: 768px) {
    border-radius: 0px;
    padding: 30px;
  }

`