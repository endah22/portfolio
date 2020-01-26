import React from "react";
import ig1 from "./assets/ig.png";
import linkedin1 from "./assets/linkedin.png";
import utube1 from "./assets/utube.png";
import behance2 from "./assets/behance1.png";
import dribbble1 from "./assets/dribbble.png";
import wa1 from "./assets/wa.png";
import email1 from "./assets/email1.png";
import "./styles.css";

function Footer() {
  return (
    <div className="Footer_body">
      <div className="text_footer">Looking More My Profile</div>
      <div className="button_1">
      <a href="#" >
        <button className="button2">
        See More</button>
        </a>
      </div>
      <div className="text_footer1">My Contact</div>
      <div className="button3">
        <a href="https://www.instagram.com/endah_design_/" target="_blank"><img src={ig1} alt="instagram" /></a>
        <a href="https://id.linkedin.com/in/purwati-endah-darmayanti-7a08b2187" target="_blank"><img src={linkedin1} alt="linkedin" /></a>
        <a href="https://www.youtube.com/channel/UCQJ4-oZFXVXBikv76fw9xOw?view_as=subscriber" target="_blank"> <img src={utube1} alt="youtube" /></a>
        <a href="https://www.behance.net/purwatiend22" target="_blank"><img src={behance2} alt="behance" /></a>
        <a href="https://dribbble.com/mayaendah" target="_blank"><img src={dribbble1} alt="dribbble" /></a>
        <a href="https://api.whatsapp.com/send?phone=6287754959145&amp;text=Hello Endah, I am interested in discussing with you”" target="_blank"><img src={wa1} alt="wa" /></a>
        <a href="mailto:purwatiendah95@gmail.com"><img src={email1} alt="email" /></a>
        </div>
    </div>
  );
}

export default Footer;
