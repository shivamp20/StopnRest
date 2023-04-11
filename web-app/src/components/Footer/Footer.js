import React from "react";
import "./Footer.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div style={{zIndex:1300, position:'sticky'}}>
      <div className="footer_main">
        <div className="footer-left">
          <h2>Stop-n-Rest</h2>
          <p>
            World's leading chain of hotels and homes
          </p>
        </div>
        <div className="footerLinks">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms and Conditions</a>
        </div>
        <div className="social-icons">
          <GoogleIcon style={{ color: "#4eacfd" }} />
          <FacebookIcon style={{ color: "#4eacfd" }} />
          <InstagramIcon style={{ color: "#4eacfd" }} />
        </div>
      </div>
      <div className="footer-bot">
        All rights reserved. ©<span> Stop-n-Rest</span>
      </div>
    </div>
  );
}

export default Footer;
