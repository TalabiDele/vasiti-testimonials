import React from "react";
import { Container } from "./Style";
import HeroImage from "../imgs/Testimonial-image-1.png";

const Hero = () => {
  return (
    <Container>
      <div className="container">
        <div className="hero_text">
          <h1>
            Amazing <br /> Experiences from Our Wonderful Customers
          </h1>
          <p>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <div className="hero_img">
          <img src={HeroImage} alt="Hero_Image" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
