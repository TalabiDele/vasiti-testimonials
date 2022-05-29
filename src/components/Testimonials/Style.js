import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  width: 100%;
  margin: 4rem auto;

  div.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    width: 80%;
    margin: auto;

    div.card {
      width: 100%;
      margin: 0rem auto 3rem auto;

      div.test {
        width: 60%;
        margin: auto;
      }

      h2 {
        font-weight: 600;
        font-size: 24px;
        letter-spacing: 0.02em;
        color: #474747;
        margin-top: 1rem;
      }

      p.details {
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.05em;
        color: #535353;
        margin: 1rem auto 2rem auto;
        text-transform: uppercase;

        span.customer {
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 0.02em;
          color: #0d019a;
          background: #eef8ff;
          border-radius: 4px;
          padding: 0.5rem;
        }

        span.vendor {
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 0.02em;
          color: #049a01;
          background: #f0ffee;
          border-radius: 4px;
          padding: 0.5rem;
        }
      }

      p.about {
        font-size: 16px;
        line-height: 150%;
        width: 60%;
        margin: auto;
        letter-spacing: 0.02em;
        color: #474747;
      }
    }
  }

  @media (max-width: 475px) {
    div.container {
      grid-template-columns: repeat(1, 1fr);

      div.card {
        div.test {
          width: 100%;
        }
        p.about {
          width: 100%;
        }
      }
    }
  }
`;
