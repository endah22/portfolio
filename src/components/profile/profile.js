import React from "react";
import foto from "./assets/aku2.png";
import ig from "./assets/ig.png";
import linkedin from "./assets/linkedin.png";
import utube from "./assets/utube.png";
import behance1 from "./assets/behance1.png";
import dribbble from "./assets/dribbble.png";
import wa from "./assets/wa.png";
import email from "./assets/email1.png";
import "./styles.css";

function Profile() {
  return (
    <div className="profile_body">
      <div className="foto">
        <img src={foto} alt="saya" />
      </div>
      <div className="perkenalan1">
        <div className="p_nama1">
          Here Purwati Endah, I’m UI/UX Designer.. I am specialist in UI Design
          or Interface Designer{" "}
        </div>
        <div className="p_body22">
          I am a professional UI / UX Designer, UI Designer, UX Designer, UX
          Writer, UI Illustration, UI Animation, and I’m also have Illustration
          skills, 2D Animation, and Graphic Designer.
        </div>
        <div className="p_body11">
          Email : purwatiendah95@gmail.com
          <br></br> Address : Tebet, Jakarta, Indonesia
          <br></br> Nomor Phone : 087754959145
          <br></br>Nationality : Indonesia
          <br></br>Freelance :Available{" "}
        </div>
        <div className="button1">
        <a href="https://www.instagram.com/endah_design_/" target="_blank"><img src={ig} alt="instagram" /></a>
        <a href="https://id.linkedin.com/in/purwati-endah-darmayanti-7a08b2187" target="_blank"><img src={linkedin} alt="linkedin" /></a>
        <a href="https://www.youtube.com/channel/UCQJ4-oZFXVXBikv76fw9xOw?view_as=subscriber" target="_blank"> <img src={utube} alt="youtube" /></a>
        <a href="https://www.behance.net/purwatiend22" target="_blank"><img src={behance1} alt="behance" /></a>
        <a href="https://dribbble.com/mayaendah" target="_blank"><img src={dribbble} alt="dribbble" /></a>
        <a href="https://api.whatsapp.com/send?phone=6287754959145&amp;text=Hello Endah, I am interested in discussing with you”" target="_blank"><img src={wa} alt="wa" /></a>
        <a href="mailto:purwatiendah95@gmail.com"><img src={email} alt="email" /></a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
