import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/" onClick={scrollToTop}>
            <img src={assets.mainLogo} alt="" className="footer-logo" />
          </Link>
          <p>
          Embark on a culinary journey with our enticing menu. From appetizers to desserts, we promise to delight every palate.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>Delivery</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>(021)-127422193</li>
            <li>contact@cravio.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Cravio - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
