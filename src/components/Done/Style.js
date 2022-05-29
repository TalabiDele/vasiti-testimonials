import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: #0000001c;
  height: 100%;
  width: 100%;
  display: ${({ done }) => (done ? "grid" : "none")};
  /* display: grid; */
  z-index: 800;
  h1 {
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    letter-spacing: -0.02em;
    width: 45%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    width: 55%;
    color: #4a4a4a;
    margin-bottom: 1rem;
  }

  div.confetti {
    background: #fff8f5;
    border-radius: 50%;
    width: 155px;
    height: 155px;
    display: grid;
    align-items: center;
    justify-items: center;
  }

  div.container {
    background-color: #fff;
    width: 35%;
    margin: auto;
    border-radius: 16px;
    box-shadow: 0px 0px 5px rgba(26, 24, 24, 0.267);
    display: grid;
    align-items: center;
    padding: 3rem 2rem;
    justify-items: center;

    p.remove {
      position: absolute;
      /* left: 15rem; */
      font-weight: 700;
      font-size: 30px;
      top: 2.5rem;
      left: 32rem;
      z-index: 100;
    }

    h1 {
      font-size: 28px;
      margin-bottom: 2rem;
      text-align: center;
    }

    input,
    textarea {
      border: 1px solid #eaeaea;
      border-radius: 8px;
      padding: 1rem;
      width: 90%;
      margin: 1rem auto 2rem auto;
      /* font-size: 1px; */
      color: #4a4a4a;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;

      &:focus {
        border: 2px solid #ff5c00;
        outline: none;
      }
    }

    .error {
      border: 1px solid #ca1010;
      border-radius: 8px;
    }

    div.wrapper {
      width: 100%;
      margin: auto;
    }
    form {
      width: 100%;
      margin: 0rem auto 0rem 2rem;
    }

    label {
      font-size: 14px;
      text-align: left;
    }

    p {
      font-size: 14px;
    }

    div.interact {
      display: flex;
      align-items: center;
      width: 80%;
      margin: 0rem auto 2rem 0rem;
      justify-content: space-between;
    }

    div.name {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      /* gap: 1rem; */
      width: 95%;

      input {
        /* width: 100%; */
      }
    }

    div.button {
      display: flex;
      justify-self: flex-end;
    }

    div.file {
      position: relative;
      width: 100%;
      /* padding-right: 2rem; */

      div.input {
        width: 100%;
        /* display: flex; */
        align-items: center;
        margin-top: 1rem;
        /* width: 100%; */
      }

      p {
        position: relative;
        /* right: 30rem; */
        font-size: 16px;
        width: 100%;
      }

      svg {
        position: relative;
        /* right: 0rem; */
        /* left: 30rem; */
        /* top: 1.3rem; */
      }
    }

    div.label {
      border: 1px solid #eaeaea;
      border-radius: 8px;
      padding: 1rem;
      width: 90%;
      /* position: absolute; */
      top: 1;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
    }

    label.label {
      width: 100%;
      position: relative;
      left: 0;
      /* margin-top: 2rem; */
    }

    input[type="radio"] {
      margin: 0rem;
      border: 1px solid #ff5c00;
      background-color: #ff5c00;
    }

    input[name="interact"] {
      accent-color: #ff5c00;
    }

    input[type="file"] {
      opacity: 0;
      display: none;

      &::-webkit-file-upload-button {
        display: none;
      }

      /* #file-upload-button {
        display: none;
      } */
    }

    div.radio {
      display: flex;
      width: 20%;
      align-items: center;
      gap: 0.5rem;
      /* justify-content: flex-end; */
    }

    .width {
      width: 90%;
      margin: auto;
    }
  }

  @media (max-width: 475px) {
    h1 {
      width: 80%;
    }

    p {
      width: 90%;
    }

    div.container {
      width: 90%;
    }
  }
`;

export const Wrapper = styled.div`
  display: ${({ isSubmit }) => (isSubmit ? "grid" : "none")};
`;
