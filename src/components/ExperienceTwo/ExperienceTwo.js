import { React, useContext } from "react";
import { Container } from "./Style";
import img from "../imgs/woman-shoppingbag-card 1.png";
import vector from "../imgs/Vector-3.png";
import AuthContext from "../ModalContext";
import imgTwo from "../imgs/Asset 1.png";

const ExperienceTwo = () => {
  const { setModal } = useContext(AuthContext);

  const handleModal = () => {
    setModal(true);
  };

  return (
    <Container>
      <div className="container">
        <div className="texts">
          <h1>Josiah’s Experience</h1>
          <button>VENDOR</button>
          <p>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <h3 onClick={handleModal}>SHARE YOUR OWN STORY</h3>
          <div className="vector">
            <img src={vector} alt="underline" />
          </div>
        </div>
        <div className="image">
          <img src={img} alt="Black-Ladies" className="one" />
          <img src={imgTwo} alt="" className="two" />
        </div>
      </div>
    </Container>
  );
};

export default ExperienceTwo;
