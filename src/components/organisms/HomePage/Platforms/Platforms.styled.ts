import styled from 'styled-components'

export const PlatformsStyles = styled.div `
  width: 100%;
  padding-bottom: 120px;
  background: #000314;

  .platforms-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 30px;
      margin-bottom: 60px;
      text-align: center;

      
      span {
        font-size: 30px;
        padding: 5px 12px;
        border-radius: 6px;
        background: white;
        color: #12022e;
        font-weight: 500;
      }
    }

    .our-services {
      margin-bottom: 80px;
    }

    .our-services p {
      font-size: 24px;
      text-align: center; 
      line-height: 1.5;

      span {
        font-size: 24px;
        font-weight: 600;
      }

    }

    .platforms {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: row;
      gap: 50px;

      .disabled p, .disabled img {
        opacity: 0.3;
        cursor: not-allowed !important;
      }

      .platform {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all;
        cursor: pointer;
        align-items: center;
        

        .platform-icon {
          width: 80px;
          height: 80px;
          border-radius: 8px;
        }

        p {
          margin-top: 10px;
        }
        
        span {
          margin-top: 8px;
          border-radius: 6px;
          padding: 5px;
          background: linear-gradient(90deg, rgba(22, 3, 54, 0.5), rgba(11, 1, 28, 0.5));
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          outline: #00062e;
        }

        &:hover {
          scale: 1.05;
        }
      }
    }

  }
`