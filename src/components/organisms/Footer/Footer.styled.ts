import styled from 'styled-components'

export const FooterStyles = styled.div `
  width: 100%;
  padding: 40px;
  background: #050012;

  .container {
    width: 100%;
    height: 100%;
  }

  .footer-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .social-medias {
      margin-top: 20px;
      display: flex;
      gap: 40px;
    }

    .social-medias .social {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      width: 35px;
      height: 35px;
      background: #0a0026;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 100%;
      cursor: pointer;
      transition: 0.2s all;

      &:hover {
        scale: 1.22;
        background: #0f0038;
      }
    }
  }
`