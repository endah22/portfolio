import React from "react";
import port1 from "./assets/volia.png";
import port2 from "./assets/qupintar.png";
import port3 from "./assets/indihome.png";
import "./styles.css";

function Portfolio() {
  return (
    <div className="portfolio_body">
      <div className="port_body1">
        <div className="text_portfolio">My Portfolio</div>
        <div className="bentuk_port"></div>
      </div>
      <div className="port1">
        <div className="gambar_port1">
        <img src={port1} alt="Portfolio 1" />
        </div>
        <div className="text_port1">
          <div className="text_dalam1">
          Redesing Web 
          <br></br>Volia
          </div>
          <div className="text_dalamm1">
          Web design, Illstration, Icon 
          <br></br>Illustration
          </div>
          <div className="button_dalam1">
      <a href="http://www.volia.id/" target="_blank" >
        <button className="button_dalamm1">
        See More</button>
        </a>
      </div>
        </div>
      </div>
      <div className="port2">
        <div className="text_port2">
          <div className="text_dalam2">
          Web design 
          <br></br>QUpintar
          </div>
          <div className="text_dalamm2">
          Mobile app, Illustration, Icon 
          <br></br>Illustration, design iOS 
          <br></br>and Android
          </div>
          <div className="button_dalam2">
      <a href="https://xd.adobe.com/view/f8f7e518-c741-4e2d-5a97-dd5da861f577-8ec6/?fullscreen" target="_blank" >
        <button className="button_dalamm2">
        See More</button>
        </a>
      </div>
        </div>
        <div className="gambar_port2">
        <img src={port2} alt="Portfolio 2" />
        </div>
      </div>
      <div className="port3">
        <div className="gambar_port3">
        <img src={port3} alt="Portfolio 3" />
        </div>
        <div className="text_port3">
          <div className="text_dalam3">
          Web Design IndiHome
          <br></br>Study
          </div>
          <div className="text_dalamm3">
          Web design, Illstration, Icon 
          <br></br>Illustration
          </div>
          <div className="button_dalam3">
      <a href="http://indihomestudy.com/" target="_blank" >
        <button className="button_dalamm3">
        See More</button>
        </a>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
