import React from "react";
import { Container } from "./Style";
import logo from "../imgs/Vasiti-Logo-black.png";
import { BtnSm } from "../Button";

const NavbarLanding = () => {
  return (
    <Container>
      <div className="container">
        <a href="/">
          <img src={logo} alt="Vasiti Logo" />
        </a>
        <ul>
          <li>
            <a href="/">ABOUT US</a>
          </li>
          <li>
            <a href="/">STORIES</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
          <li>
            <a href="/">LOGIN</a>
          </li>
          <li>
            <BtnSm>SIGN UP</BtnSm>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default NavbarLanding;
