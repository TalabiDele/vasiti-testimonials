import styled from "styled-components";

export const Container = styled.div`
  background: #25201d;
  color: #fff;
  padding: 3rem 0rem;

  h2 {
    font-size: 16px;
    margin-bottom: 2rem;
  }

  a {
    color: #fff;
    font-size: 14px;
  }

  li {
    margin-bottom: 1rem;
  }

  div.social {
    margin-bottom: 3rem;
    display: flex;
    gap: 0.5rem;

    div.icon {
      background-color: #fff;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      color: #25201d;
    }
  }

  div.container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 80%;
    margin: auto;
    justify-items: center;
  }

  @media (max-width: 600px) {
    div.container {
      grid-template-columns: repeat(2, 1fr);
      justify-items: normal;
      gap: 1rem;
      width: 90%;
      margin: auto;

      .company,
      .products,
      .careers,
      .touch,
      .community {
        margin-bottom: 1rem;
        width: 100%;
      }
    }
  }
`;
