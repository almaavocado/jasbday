import React from "react";
import birthdayballoons from "../Assets/birthday-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      
      <div className="about-section-image-container">
        <img src={birthdayballoons} alt="" />
      </div>
      <div className="about-section-text-container">
      <p className="primary-subheading">Birthday Messages</p>
        <h1 className="primary-heading">
          From your friends and family!
        </h1>
        <p className="primary-text">
          Enjoy all these memories and birthday wishes from the people who cherish you the most!
        </p>

        
      </div>
      
    </div>
    
  );
};

export default About;
