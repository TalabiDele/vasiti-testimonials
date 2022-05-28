import styled from "styled-components";
import ellipse from "../imgs/Ellipse-7.png";

export const Container = styled.div`
  background: #fff8f5;
  color: #242120;

  div.container {
    display: flex;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 4rem;

    div.image {
      background: url(${ellipse});
      background-repeat: no-repeat;
      width: 50%;
      background-size: cover;
      background-position: top;
      display: flex;
      justify-content: center;
    }

    div.texts {
      width: 40%;
      margin: 0rem auto 2rem auto;

      h1 {
        font-size: 32px;
      }

      button {
        background: none;
        border: 1px solid rgba(255, 92, 0, 0.4);
        border-radius: 4px;
        color: #ff5c00;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
        padding: 0.5rem;
      }

      p {
        font-size: 18px;
        line-height: 1.5;
        width: 80%;
        margin-bottom: 3rem;
        letter-spacing: 0.02em;
      }

      h3 {
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
        cursor: pointer;
        letter-spacing: 0.2em;
        color: #ff5c00;
      }

      div.vector {
        margin-top: -10px;
      }
    }
  }
`;
