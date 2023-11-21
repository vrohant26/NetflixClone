import React from "react";
import "./Footer.css";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="socials">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
      </div>
      <div className="footer_content">
        <div className="col1">
          <ul>
            <li>Audio Descrition</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
            <li className="SC">Service Code</li>
            <li style={{ fontSize: "0.8rem" }}>
              &#169; 1997-{currentYear} Netflix,Inc{" "}
            </li>
          </ul>
        </div>
        <div className="col2">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div className="col3">
          <ul>
            <li>Gift Cards</li>
            <li>Term of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="col4">
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
