// import "./index.css";
// import logo from "./image/logo.png";
// import headphones from "./image/headphones.png";
// // import { FaBars } from "react-icons/fa";
// import { useState } from "react";

// function Landingpage() {
//     return (
//     <div className="container">
//       <div className="navbar">
//         <img className="image" src={logo} alt="logo" />
//         <p>Home</p>
//         <p>Video</p>
//         <p>Blog</p>
//         <p>Podcast</p>
//         <p>Resume</p>
//       </div>

//       <div className="homepage">
//         <div className="text">
//           <div className="all">
//             <p>
//               Dive into the captivating journey crafted by our talented team.
//               Explore our website and learn more about my team.
//             </p>
//             <p className="enjoy">Enjoy !</p>
//           </div>

//           <img className="picture" src={headphones} alt="headphones" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Landingpage;

// index.js
import "./index.css";
import logo from "./image/logo.png";
import headphones from "./image/headphones.png";

function Landingpage() {
  return (
    <div className="container">
      <nav className="navbar">
        <img className="logo" src={logo} alt="logo" />
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#podcast">Podcast</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>

      <div className="hero">
        <div className="hero-text">
          <h1>Enjoy your<br />marketing</h1>
          <p>
            Dive into the captivating journey crafted by our talented team.
            Explore our website and learn more about my team.
          </p>
          <button className="cta-button">Explore</button>
        </div>
        <div className="hero-image">
          <img src={headphones} alt="headphones" />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
