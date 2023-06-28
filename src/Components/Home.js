import React from "react";
import BannerBackground from "../Assets/App-Banner.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-image-section">
          <img src={BannerBackground} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;