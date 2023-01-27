import styled from "styled-components";

export const InstitutionalPageStyles = styled.div `
  min-height: 100vh;
  padding-bottom: 80px;
  padding-top: 60px;

  
  @media (max-width: 768px) {
      min-height: 0px;
      padding-bottom: 0px;
      padding-top: 0px;
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

  .button {
    display: inline-flex;
    border-radius: 4px;
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    padding: 10px 20px;
    align-items: center;
    color: white;
    border: none !important;
    font-size: 17px;
    z-index: 1;
    cursor: pointer;
    background: #00071c;
    outline: 1px solid rgba(0,23,97, 0.66) !important;
  }

  .button svg {
    width: 20px;
    margin-right: 15px;
  }

  .button:before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    top: 100%;
    width: 140%;
    height: 180%;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:after {
    content: "";
    position: absolute;
    left: 55%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    top: 180%;
    width: 160%;
    height: 190%;
    background-color: white;
    border-radius: 50%;
    display: block;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
    z-index: -1;
  }

  .button:hover {
    color: black;
  }

  .button:hover:before {
    top: -35%;
    background-color: white;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
  }

  @media (max-width: 768px) {
    border-radius: 0px;
    padding: 30px;
  }

`