import React from "react";
import Start from "../assets/abt.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Start})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          my app
        </p>
      </div>
    </div>
  );
}

export default About;
