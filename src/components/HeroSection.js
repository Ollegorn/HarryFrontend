import React from "react";
import "./HeroSection.css";
import "../App.css";
import CustomButton from "./CustomButton";
import useScreenSize from "./useScreenSize";

function HeroSection() {
  const screenSize = useScreenSize();
  return (
    <header className="hero-container hero-container--bg-02" id="home">
      <div className="hero__text">
        <h1 className="hero__text--heading">Step into the Arena of Magic</h1>
        <p className="hero__text--body">
          Welcome to MasterOfMagic, the ultimate platform for duelling
          enthusiasts in the Harry Potter Magic Awakened community. Dive into a
          world where magic duels come alive, and players compete for glory and
          honor in thrilling tournaments.
        </p>
      <div className="hero__cta">
        <CustomButton
          type={"cta"}
          size={
            screenSize.width < 1104
              ? "small"
              : screenSize.width < 1315
              ? "medium"
              : "large"
          }
        >
          Begin Your Magical Journey
        </CustomButton>
      </div>
      </div>
    </header>
  );
}

export default HeroSection;
