import React from "react";
import "./HeroSection.css";
import "../App.css";
import CustomButton from "./CustomButton";
import { useScreenSize, breakPoint } from "./useScreenSize";

function HeroSection({ id, heading, body, ctaText, showButton = true, theme }) {
  const screenSize = useScreenSize();
  return (
    <header className={`hero-container`} id={id}>
      <div className="hero__text">
        <h1>{heading}</h1>
        <div className="divider"></div>
        <p className="p--high-emphasis">{body}</p>
      </div>
      {showButton && (
        <CustomButton
          type={"cta"}
          size={
            screenSize.width > breakPoint.desktopLarge
              ? "extra-large"
              : screenSize.width > breakPoint.desktop
              ? "large"
              : screenSize.width > breakPoint.tablet
              ? "medium"
              : "small"
          }
          theme={theme}
        >
          {ctaText}
        </CustomButton>
      )}
    </header>
  );
}

export default HeroSection;
