import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0rem;

  div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: auto;

    ul {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      width: 40%;
      align-items: center;

      a {
        font-weight: 400;
        font-size: 13px;
        color: #242120;
      }
    }

    @media (max-width: 475px) {
      ul {
        display: none;
      }
    }
  }
`;
