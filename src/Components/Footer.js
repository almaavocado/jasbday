import React from "react";
import Logo from "../Assets/hb-logo.svg";


const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Happy Birthday Jas</span>
          <span>Enjoy your day!</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
