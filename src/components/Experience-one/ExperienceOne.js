import React from "react";
import { Container } from "./Style";
import img from "../imgs/black-beautiful-ladies-smiling.png";
import vector from "../imgs/Vector-3.png";

const ExperienceOne = () => {
  return (
    <Container>
      <div className="container">
        <div className="image">
          <img src={img} alt="Black-Ladies" />
        </div>
        <div className="texts">
          <h1>Tolu & Joy’s Experience</h1>
          <button>CUSTOMER</button>
          <p>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <h3>SHARE YOUR OWN STORY</h3>
          <div className="vector">
            <img src={vector} alt="underline" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ExperienceOne;
