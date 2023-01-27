import styled from 'styled-components'

export const InstitutionalSidebarStyles = styled.div `
  height: 100%;
  width: 400px;
  background: rgba(0, 12, 51, 0.24);
  backdrop-filter: blur(10px);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  padding: 30px 30px;

  .title {
    font-size: 26px;
    text-align: center;
  }

  .policies-menu {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .active {
    background: ${props => props.theme.colors.text};
    color: rgba(0, 12, 51, 1);
  }

  .policy {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    margin-bottom: 20px;
    text-align: center;
  }

  .policy:last-child {
    margin-bottom: 0px;
  }

  .policy::after {
    opacity: 0;
    content: '';
    position: absolute;
    z-index: -1;
    margin: 0 auto;
    width: 50%;
    height: 60px;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
    filter: blur(30px);
  }

  .policy:hover:before,
  .policy:hover:after {
    opacity: 1;
    transform: skewX(0deg) scaleX(1.9);
  }

  .policy:before,
  .policy:after {
    background: linear-gradient(315deg, #000d36, #000208)
  }

  @media (max-width: 768px) {
    display: none;
  }
`