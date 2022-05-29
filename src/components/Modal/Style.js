import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: #0000001c;
  height: ${({ modal }) => (modal ? "100%" : "0%")};
  width: 100%;
  z-index: 100;
  display: ${({ modal }) => (modal ? "grid" : "none")};
  transition: all 4s ease-in-out;
  /* display: grid; */

  div.container {
    background-color: #fff;
    width: ${({ modal }) => (modal ? "35%" : "0%")};
    margin: auto;
    border-radius: 16px;
    box-shadow: 0px 0px 5px rgba(26, 24, 24, 0.267);
    display: ${({ modal }) => (modal ? "grid" : "none")};
    align-items: center;
    padding: 3rem 2rem;
    justify-items: center;
    transition: all 4s ease-in-out;

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
    div.container {
      width: 90%;

      form {
        margin-left: 1rem;
      }

      div.interact {
        /* flex-direction: column; */
        justify-content: flex-start;
        align-items: flex-start;
      }

      div.radio {
        width: 100%;
      }
    }
  }
`;

export const Wrapper = styled.div``;
