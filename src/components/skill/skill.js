import React from "react";
import daun from "./assets/daun1.png";
import daun2 from "./assets/daun11.png";
import uiux from "./assets/uiux1.png";
import icon from "./assets/icon1.png";
import motion from "./assets/motion1.png";
import frontend from "./assets/frontend1.png";
import gd from "./assets/gd1.png";
import "./styles.css";

function Skill() {
  return (
    <div className="skill_body">
        <div className="daun1">
        <img src={daun} alt="Illustration daun" />
        </div>
        <div className="skill_body1">
          <div className="s_body1">
            <div className="tulis">
            What can I do 
            </div>
            <div className="bentuk">
            </div>
          </div>
          <div className="skill1">
            <div className="uiux">
              <div className="icoon1">
              <img src={uiux} alt="icon ui/ux" />
              </div>
              <div className="title1">
              UI/UX
              </div>
              <div className="isi1">
              Landing Pages, User Flow, Wirefreming, Prototyping, Mobile App Design, Web App
              </div>
            </div>
            <div className="icon">
              <div className="icoon2">
              <img src={icon} alt="icon illustration" />
              </div>
              <div className="title2">
              ICON/ILLUSTRATION
              </div>
              <div className="isi2">
              Character Design, Icon Set, Illustration Guide, Illustration Set
              </div>
            </div>
            <div className="motion">
              <div className="icoon3">
              <img src={motion} alt="icon motion" />
              </div>
              <div className="title3">
              MOTION GRAPHIC
              </div>
              <div className="isi3">
              2D Animation, UI Motion
              </div>
            </div>
          </div>
          <div className="skill2">
          <div className="frontend">
              <div className="icoon4">
              <img src={frontend} alt="icon frontend" />
              </div>
              <div className="title4">
              FRONTEND
              </div>
              <div className="isi4">
              HTML/CSS, JavaScript, Reactjs, Bootstrap
              </div>
            </div>
            <div className="gd">
              <div className="icoon5">
              <img src={gd} alt="icon graphic design" />
              </div>
              <div className="title5">
              GRAPHIC DESIGNER
              </div>
              <div className="isi5">
              Branding, Logo, Visual Identity, Stationary Kit, Marketing Materials
              </div>
            </div>
          </div>
        </div>
        <div className="daun2">
        <img src={daun2} alt="Illustration daun" />
        </div>
    </div>
  );
}

export default Skill;
