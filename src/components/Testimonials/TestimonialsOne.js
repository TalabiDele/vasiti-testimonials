import React from "react";
import { Container } from "./Style";
import Ike from "../imgs/Ellipse 22.png";
import fashina from "../imgs/fashina.png";
import fayemi from "../imgs/fayemi.png";
import chisom from "../imgs/chisom.png";
import adeyemi from "../imgs/adeyemi.png";
import chidi from "../imgs/chidi.png";

const TestimonialsOne = () => {
  return (
    <Container>
      <div className="container">
        <div className="card">
          <div className="test">
            <img src={Ike} alt="Joseph-Ike" />
            <h2>Joseph Ike</h2>
            <p className="details">
              In Ikeja <span className="customer">CUSTOMER</span>
            </p>
          </div>
          <p className="about">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim.
          </p>
        </div>
        <div className="card">
          <div className="test">
            <img src={fashina} alt="Fayemi" />
            <h2>Adetola Fashina</h2>
            <p className="details">
              Ibadan <span className="customer">CUSTOMER</span>
            </p>
          </div>
          <p className="about">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut
            voluptate aute id deserunt nisi. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </p>
        </div>
        <div className="card">
          <div className="test">
            <img src={fayemi} alt="Fayemi" />
            <h2>Emmanuel Fayemi</h2>
            <p className="details">
              In Akoka <span className="customer">CUSTOMER</span>
            </p>
          </div>
          <p className="about">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat
            incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
        <div className="card">
          <div className="test">
            <img src={chisom} alt="Chisom" />
            <h2>Chisom Obilor</h2>
            <p className="details">
              In Magodo <span className="vendor">VENDOR</span>
            </p>
          </div>
          <p className="about">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex
            duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt
            mollit dolore cillum minim tempor enim.
          </p>
        </div>
        <div className="card">
          <div className="test">
            <img src={adeyemi} alt="Adeyemi" />
            <h2>Adunoluwa Adeyemi</h2>
            <p className="details">
              Iwo Road <span className="vendor">VENDOR</span>
            </p>
          </div>
          <p className="about">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deser unt ut
            voluptate aute id deserunt nisi. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud
            amet.
          </p>
        </div>
        <div className="card">
          <div className="test">
            <img src={chidi} alt="Chidi" />
            <h2>Chidi Okeke</h2>
            <p className="details">
              In Somolu <span className="vendor">VENDOR</span>
            </p>
          </div>
          <p className="about">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi. Elit aute irure tempor cupidatat
            incididunt sint deser unt ut voluptate aute id deserunt nisi. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsOne;
