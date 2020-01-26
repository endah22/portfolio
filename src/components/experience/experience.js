import React from "react";
import foto1 from "./assets/myprofile.png";
import "./styles.css";

function Experience() {
  return (
    <div className="Experience_body">
      <div className="judul">
      My Experience
      </div>
    <div className="body_exp">
    <div className="my_photo_profile">
    <img src={foto1} alt="my photo profile" />
    </div>
    <div className="text1">
      <div className="textisi1">
      <div className="judul_text1">
      PT. PRUDENTIAL INDONESIA 
      </div>
      <div className="isi_text1">
      UI/UX Designer 
      <br></br>Jun 2019 - Present
      </div>
      </div>
      <div className="textisi2">
      <div className="judul_text2">
      PT. Mitra Erat Technology 
      </div>
      <div className="isi_text2">
      UI/UX Designer 
      <br></br>Aug 2018 - Mei 2019
      </div>
      <div className="isi_text22">
      Head of Creative
      <br></br>Aug 2018 - Mei 2019
      </div>
      </div>
    </div>
    <div className="text2">
      <div className="textisi3">
      <div className="judul_text3">
      PT. Eannovate Creative 
      </div>
      <div className="isi_text3">
      UI Designer 
      <br></br>Feb 2018 - Jul 2018
      </div>
      </div>
      <div className="textisi4">
      <div className="judul_text4">
      PT. Saleha Juliandi (freelance)
      </div>
      <div className="isi_text4">
      Motion Graphic Designer 
      <br></br>Aug 2017 - Des 2017
      </div>
      </div>
      <div className="textisi5">
      <div className="judul_text5">
      PT. Fruity Logic Design
      </div>
      <div className="isi_text5">
      Graphic Designer 
      <br></br>Jan 2017 - Jul 2017
      </div>
      <div className="isi_text55">
      Designer Graphic (internship)
      <br></br>Jul 2016 - Des 2016
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Experience;
