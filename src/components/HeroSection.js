import React from "react";
import "./HeroSection.css";
import "../App.css";
import CustomButton from "./CustomButton";
import useScreenSize from "./useScreenSize";

function HeroSection({ id, bgID, heading, body, ctaText }) {
  const screenSize = useScreenSize();
  return (
    <header className={`hero-container hero-container--bg-${bgID}`} id={id}>
      <div className="hero__text">
        <h1 className="hero__text--heading">{heading}</h1>
        <p className="hero__text--body">{body}</p>
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
            {ctaText}
          </CustomButton>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
