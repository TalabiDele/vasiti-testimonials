import { useContext, React } from "react";
import AuthContext from "../ModalContext";
import { Container } from "./Style";
import { Finish } from "../Button";
import cone from "../imgs/cone.png";

const DoneModal = () => {
  const { done, setDone } = useContext(AuthContext);

  return (
    <Container done={done}>
      <div className="container">
        <div className="confetti">
          <img src={cone} alt="" />
        </div>
        <h1>Thank you for sharing your story!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="btn">
          <Finish onClick={() => setDone(false)}>Close</Finish>
        </div>
      </div>
    </Container>
  );
};

export default DoneModal;
