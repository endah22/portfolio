import React from "react";
import me from "./assets/me.png";
import "./styles.css";

function Home() {
  return (
    <div className="home_body">
      <div className="perkenalan">
        <div className="p_nama">Hello I’m </div>
        <div className="p_body2">Purwati Endah 
        Darmayanti</div>
        <div className="p_body1">I’m a UI/UX Designer </div>
        <a href="https://drive.google.com/file/d/11H-YM-46IMVlTykafpIWBIX3vDICLeMP/view?usp=sharing" target="_blank" download>
        <button className="button">
        Download CV</button>
        </a>
      </div>
      <div className="me">
        <img src={me} alt="Illustration" />
      </div>
    </div>
  );
}

export default Home;
