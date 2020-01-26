import React from "react";
import logo from "./assets/logo.png";
//import { href } from "react-router";
import "./styles.css";


function Header() {
  

  return (
    
    // <header>
    //   <div className="logo">
    //   <img src={logo} alt="Button close" />
    //   </div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <a href="#">HOME</a>
    //       </li>
    //       <li>
    //         <a href="#">MY PROFILE</a>
    //       </li>
    //       <li>
    //         <a href="#">SKILL</a>
    //       </li>
    //       <li>
    //         <a href="#">EXPERIANCE</a>
    //       </li>
    //       <li>
    //         <a href="#">PORTFOLIO</a>
    //       </li>
    //       <li>
    //         <a href="#">CONTACT</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
    <div className="header">
      <div className="header_content">
        <div className="header_title">
          <img src={logo} alt="LOGO" />
        </div>
        <ul className="header_navigation">
          <li >
            <a href="/home">HOME</a>
          </li>
          <li >
            <a href="./profile " class="w--current" >MY PROFILE</a>
          </li>
          <li >
            <a href="/skill">SKILL</a>
          </li>
          <li >
            <a href="#">EXPERIANCE</a>
          </li>
          <li >
            <a href="#">PORTFOLIO</a>
          </li>
          <li >
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Header;
