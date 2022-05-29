import styled from "styled-components";

export const BtnSm = styled.button`
  border: none;
  background: #ff5c00;
  box-shadow: 1px 4px 8px rgba(239, 88, 3, 0.2);
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
`;

export const BtnSubscribe = styled.button`
  position: absolute;
  font-size: 14px;
  background: #ffffff;
  box-shadow: 1px 4px 8px rgba(239, 88, 3, 0.2);
  border-radius: 4px;
  padding: 0.7rem 1.5rem;
  right: 20.3rem;
  font-weight: 500;
  /* left: 0.5rem; */
  border: none;
  cursor: pointer;

  @media (max-width: 475px) {
    right: 3rem;
  }
`;

export const FormBtn = styled.div`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #ffffff;
  background: #ff5c00;
  border: none;
  width: 18rem;
  text-align: center;
  box-shadow: 2px 8px 30px rgba(230, 83, 0, 0.18);
  border-radius: 8px;
  padding: 2rem 0rem;
  cursor: pointer;
  justify-self: flex-end;
  position: relative;
  right: 0rem;
  left: 16rem;

  @media (max-width: 475px) {
    left: 0rem;
  }
`;

export const Finish = styled.div`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.02em;
  color: #ffffff;
  background: #ff5c00;
  border: none;
  width: 18rem;
  text-align: center;
  box-shadow: 2px 8px 30px rgba(230, 83, 0, 0.18);
  border-radius: 8px;
  padding: 2rem 0rem;
  cursor: pointer;

  @media (max-width: 475px) {
    padding: 1rem 0rem;
  }
`;
