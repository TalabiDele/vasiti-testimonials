import React from "react";
import { Container } from "./Style";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div className="company">
          <h2>Company</h2>
          <ul>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Term of Use</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Press and Media</a>
            </li>
          </ul>
        </div>
        <div className="products">
          <h2>Products</h2>
          <ul>
            <li>
              <a href="/">Marketplace</a>
            </li>
            <li>
              <a href="/">Magazine</a>
            </li>
            <li>
              <a href="/">Seller</a>
            </li>
            <li>
              <a href="/">Wholesale</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
          </ul>
        </div>
        <div className="careers">
          <h2>Carees</h2>
          <ul>
            <li>
              <a href="/">Become a Campus Rep</a>
            </li>
            <li>
              <a href="/">Become a Vasiti Influencer</a>
            </li>
            <li>
              <a href="/">Become a Campus writer</a>
            </li>
            <li>
              <a href="/">Become an Affiliate</a>
            </li>
          </ul>
        </div>
        <div className="touch">
          <h2>Get in touch</h2>
          <ul>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li>
              <a href="/">Partner with us</a>
            </li>
            <li>
              <a href="/">Advertise with us</a>
            </li>
            <li>
              <a href="/">Help/FAQs</a>
            </li>
          </ul>
        </div>
        <div className="community">
          <h2>Join our community</h2>
          <div className="social">
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
            <div className="icon">
              <FaLinkedinIn />
            </div>
          </div>
          <p>Email Newsletter</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
