import React from "react";
import "./HeroSection.css";
import "../App.css";
import CustomButton from "./CustomButton";

function HeroSection() {
  return (
    <div className="hero-container" id="home">
      {/*<video src='/Videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>MAGIC AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <CustomButton type={"default"} size={"small"}>
          Welcome to MasterOfMagic!
        </CustomButton>
      </div>
    </div>
  );
}

export default HeroSection;
