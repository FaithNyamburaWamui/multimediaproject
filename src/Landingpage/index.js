import "./index.css";
import logo from "./image/logo.png";
import headphones from "./image/headphones.png";
// import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Landingpage() {
    return (
    <div className="container">
      <div className="navbar">
        <img className="image" src={logo} alt="logo" />
        <p>Home</p>
        <p>Video</p>
        <p>Blog</p>
        <p>Podcast</p>
        <p>Resume</p>
      </div>

      <div className="homepage">
        <div className="text">
          <div className="all">
            <p>
              Dive into the captivating journey crafted by our talented team.
              Explore our website and learn more about my team.
            </p>
            <p className="enjoy">Enjoy !</p>
          </div>

          <img className="picture" src={headphones} alt="headphones" />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
