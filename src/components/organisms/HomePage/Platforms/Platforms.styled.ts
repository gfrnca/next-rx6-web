import styled from 'styled-components'

export const PlatformsStyles = styled.div `
  width: 100%;
  height: 1000px;
  background: rgba(22, 3, 54, 0.3);

  .platforms-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 30px;
      margin-bottom: 60px;
    }

    .platforms {
      display: flex;
      flex-direction: row;
      gap: 50px;
        
      .disabled {
        opacity: 0.3;
      }

      .platform {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.5s all;

        .platform-icon {
          width: 80px;
          height: 80px;
          border-radius: 8px;
        }

        p {
          margin-top: 10px;
        }

        &:hover {
          scale: 1.05;
        }
      }
    }

  }
`