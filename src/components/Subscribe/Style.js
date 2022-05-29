import styled from "styled-components";

export const Container = styled.div`
  background: #25201d;
  color: #fff;

  div.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 80%;
    margin: auto;
    justify-items: center;
    align-items: center;
    position: relative;
    bottom: 3rem;

    div.subscribe {
      h1 {
        font-size: 40px;
        line-height: 40px;
        letter-spacing: -0.03em;
        margin-bottom: 1rem;
      }

      p {
        font-size: 14px;
        line-height: 20px;
        width: 60%;
        margin-bottom: 2rem;
        letter-spacing: 0.02em;
      }

      form {
        display: flex;
        align-items: center;
      }

      input {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        border: none;
        padding: 1rem;
        width: 60%;
        position: relative;
        color: #fff;

        ::placeholder {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 600px) {
    div.container {
      display: flex;
      flex-direction: column-reverse;
      bottom: 0rem;
      width: 95%;
      padding-top: 3rem;
      margin: auto;
      justify-content: center;
      align-items: center;

      div.subscribe {
        width: 100%;
        margin: 0rem auto 2rem auto;

        h1 {
          font-size: 40px;
          margin: auto;
        }

        p {
          width: 80%;
        }

        input {
          width: 90%;
        }
      }

      div.image {
        width: 100%;
        margin: auto;

        img {
          width: 100%;
        }
      }
    }
  }
`;
