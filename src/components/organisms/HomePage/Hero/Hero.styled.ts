import styled from 'styled-components'

import banner from '../../../../assets/background.png'

export const HeroStyles = styled.div `
  .hero-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .hero-wrapper h1 {
    font-size: 30px;

    span {
      font-size: 30px;
      padding: 5px 12px;
      border-radius: 6px;
      background: linear-gradient(90deg, #160336, #00062e);
      font-weight: 500;
    }

    @media (max-width: 768px) {
      line-height: 1.5;
    }
  }

  .hero-wrapper p {
    font-size: 20px;
    margin-top: 20px;
  }

  .hero-benefits {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 50px;
    gap: 40px;
    flex-wrap: wrap;
  }

  .box {
    position: relative;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    z-index: 1;
    cursor: context-menu;
  }

  .box::before {
    content: '';
    position: absolute;
    margin: 0 auto;
    width: 50%;
    height: 70%;
    text-decoration: none;
    background: #fff;
    border-radius: 100%;
    transform: skewX(0deg);
    transition: 0.5s;
    opacity: 0.2;
  }

  .box::after {
    opacity: 0;
    content: '';
    position: absolute;
    margin: 0 auto;
    width: 50%;
    height: 70%;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
    filter: blur(30px);
  }

  .box:hover:before,
  .box:hover:after {
    opacity: 1;
    transform: skewX(0deg) scaleX(1.9);
  }

  .box:before,
  .box:after {
    background: linear-gradient(315deg, #160336, #00020f)
  }

  .box .content {
    min-height: 254px;
    width: 400px;
    padding: 20px 40px;
    background: rgba(0, 0, 91, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1;
    transform: 0.5s;
    color: #fff;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 300px;

    }
  }

  .box .content h2 {
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    color: #fff;
    margin-bottom: 10px;
  }

  .box .content p {
    font-size: 18px;
    margin-top: 0px;
    line-height: 1.5;
  }

  .divisor {
    margin-bottom: -80px;
  }
`