import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MOHAMMAD
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="http://www.instagram.com/mohammadma._.77" target="_blank">
          <BsInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Mohammad Tutorials, All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
