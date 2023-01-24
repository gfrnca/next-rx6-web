import styled from 'styled-components'

export const NavbarStyles = styled.div `
  width: 100%;
  height: 90px;
  background: #00000a;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: 0.2s all;

  .brand {
    width: 30px;
    height: 40px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
  }

  .links-container {
    @media (max-width: 800px) {
      display: none;
    }

    margin-right: auto;
    margin-left: 50px;
  }

  .links-container ul {
    display: flex;
    flex-direction: row;
  }

  .links-container ul li {
    list-style: none;
    margin-right: 50px;
    color: #cccccc;
    transition: 0.2s all;
  }

  .links-container ul li:hover {
    color: ${props => props.theme.colors.text};
    scale: 1.02;
  }

  .links-container ul li:last-child {
    margin-right: 0px;
  }

  .active {
    color: white !important;
  }

  .discord-cta {
    @media (max-width: 800px) {
      display: none;
    }
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
    background: linear-gradient(90deg, rgba(22, 3, 54, 0.5), rgba(0, 6, 46, 0.5));
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
`