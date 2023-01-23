import styled from 'styled-components'

export const NavbarStyles = styled.div `
  width: 100%;
  height: 90px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;

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
  }

  .links-container ul {
    display: flex;
    flex-direction: row;
  }

  .links-container ul li {
    list-style: none;
    margin-right: 50px;
    color: #cccccc;
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

  .discord-cta button {
    padding: 15px 20px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 13px;
    border-radius: 4px;
    border: none;
    background: #fff;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;  

    svg {
      margin-right: 10px;
    }
  }

  .discord-cta button:hover {
    background: ${props => props.theme.colors.primary};
    color: #fff;
    outline: 1px solid #fff;
  }


`