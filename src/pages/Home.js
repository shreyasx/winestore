import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> WINES MADE WITH LOVE </h1>
        <p> best quality wine with proofs</p>
        
      </div>
    </div>
  );
}

export default Home;
