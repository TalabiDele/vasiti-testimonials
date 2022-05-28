import React from "react";
import { Container } from "./Style";
import banner from "../imgs/subscribe-banner 1.png";
import { BtnSubscribe } from "../Button";

const Subscribe = () => {
  return (
    <Container>
      <div className="container">
        <div className="image">
          <img src={banner} alt="Subscibe-banner" />
        </div>
        <div className="subscribe">
          <h1>
            Be a member <br /> of our community 🎉
          </h1>
          <p>
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>
          <form className="input">
            <input type="text" placeholder="enter your email address" />
            <BtnSubscribe>Subscribe</BtnSubscribe>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Subscribe;
