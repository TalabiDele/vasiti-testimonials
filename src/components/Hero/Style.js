import styled from "styled-components";
import bg from "../imgs/Subtract.png";

export const Container = styled.div`
  margin-top: 3rem;

  div.container {
    display: flex;
    /* grid-template-columns: 40% 60%; */
    justify-items: center;
    width: 80%;
    margin: auto;
    /* align-items: center; */

    div.hero_text {
      margin: 7rem auto 0rem 7rem;
      /* margin: auto; */

      h1 {
        width: 100%;
        font-size: 48px;
        line-height: 1.4;
        letter-spacing: -0.02em;
      }

      p {
        font-weight: 400;
        font-size: 18px;
        color: #494949;
        width: 85%;
        margin-top: 1.5rem;
        line-height: 2;
      }
    }

    div.hero_img {
      background: url(${bg});
      width: 100rem;
      /* width: 711px; */
      /* height: 40rem; */
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom;
      /* margin-right: 5rem; */
      display: flex;
      justify-content: center;

      img {
        object-fit: cover;
        width: 40rem;
        /* bottom: 1.8rem; */
        /* height: 536px; */
      }
    }
  }
`;
