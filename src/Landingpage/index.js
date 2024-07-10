import "./index.css";
import logo from "./image/logo.png";
import headphones from "./image/headphones.png";

function Landingpage() {
  return (
    <div className="container">
      <div className="navbar">
        <img className="image" src={logo} alt="logo" />
        {/* <div className="page"> */}
        <p>Home</p>
        <p>Video</p>
        <p>Blog</p>
        <p>Podcast</p>
        <p>Resume</p>
        {/* </div> */}
      </div>

      <div className="homepage">
        <div className="text">
          <div className="all">
            <p>
              Dive into the captivating journey crafted by our talented team.
              Explore our website and learn more about my team.
            </p>
            {/* <div className="enjoy"> */}
            <p className="enjoy">Enjoy !</p>
            {/* </div> */}
          </div>

          <img className="picture" src={headphones} alt="headphones" />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
