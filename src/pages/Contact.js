import React from "react";
import "../styles/Contact.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Contact() {
  return (
    <div>
    <div className="information"><h2>Welcome to contact us!</h2></div>
    <div className="footer">
      <div className="socialMedia">
        <a href = "https://www.instagram.com/"> <InstagramIcon/> </a>
        <a href = "https://www.facebook.com/"> <FacebookIcon/> </a>
        <a href = "https://www.instagram.com/"> <TwitterIcon/> </a>
        <a href = "https://www.instagram.com/"> <LinkedInIcon/> </a>
      </div>
    </div>
    </div>
  );
}

export default Contact;