import React from 'react';
import './footer.css';
import logoURl from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding" id="footer">
      <div className="container">
        <div className="gpt3__footer-heading">
          <h4 className="gradient__text">
            Do you want to step in to the future before others
          </h4>
          <a className="gpt3__footer-btn" href="">
            Request Early Access
          </a>
        </div>
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-logo">
            <img src={logoURl} alt="logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h5>Links</h5>
            <a href="#">Overons</a>
            <a href="#">Social Media</a>
            <a href="#">Counters</a>
            <a href="#">Contact</a>
          </div>
          <div className="gpt3__footer-links_div">
            <h5>Company</h5>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact</a>
          </div>
          <div className="gpt3__footer-links_div">
            <h5>Get in touch</h5>
            <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
            <a href="#">085-132567</a>
            <a href="#">info@payme.net</a>
          </div>
        </div>
        <div className="gpt3__footer-copyright">
          <p>&copy; 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
