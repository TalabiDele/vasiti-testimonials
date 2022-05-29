import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.04);
  padding: 1rem 0rem;

  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 70%;
    margin: auto;
    justify-items: center;
  }

  a {
    color: #000;
    font-size: 13px;
  }

  @media (max-width: 475px) {
    display: none;
  }
`;
