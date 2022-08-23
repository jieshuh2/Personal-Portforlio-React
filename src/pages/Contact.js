import React from "react";
import "../styles/Contact.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import "../styles/Footer.css";

function Contact() {
  return (
    <div>
    <div className="information"><h2>Welcome to contact us!</h2></div>
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
      </div>
    </div>
    </div>
  );
}

export default Contact;