import "./Home.css";
import React, { useEffect, useState } from "react";
import { useScreenSize, breakPoint } from "../useScreenSize";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import FeaturedSection from "../FeaturedSection";
import FeaturedEventsSection from "../FeaturedEventsSection";
import HighlightSection from "../HighlightSection";
import RulesSection from "../RulesSection";
import CustomButton from "../CustomButton";

function Home() {
  const screenSize = useScreenSize();
  const [tournamentsData, setTournamentsData] = useState([]);

  useEffect(() => {
    const tournamentsUrl =
      "https://harrytournament-api.azurewebsites.net/api/Tournament/AllTournamnets";

    fetch(tournamentsUrl)
      .then((res) => res.json())
      .then((data) => {
        setTournamentsData(data);
        console.log("Tournaments Data:", data);
      })
      .catch((error) => console.log("Error:", error));
  }, []);

  // Filter tournaments with ongoing duels
  const ongoingTournaments = tournamentsData.filter(
    (tournament) => tournament.tournamentDuels.length !== 0
  );

  return (
    <>
      <Navbar pageTitle={"Home"} theme={4} />
      <div className="content-wrapper">
        <HeroSection
          id="home"
          heading="Step into the Arena of Magic"
          body="Welcome to MasterOfMagic, the ultimate platform for duelling
          enthusiasts in the Harry Potter Magic Awakened community."
          ctaText="Begin Your Magical Journey"
          theme={4}
        />
        <FeaturedSection />
        <FeaturedEventsSection />
        {<HighlightSection />}
        <RulesSection />
        <div className="col">
          <svg viewBox="0 0 62 18">
            <text
              className="title"
              x="0"
              y="15"
              fill="url(#paint0_linear_12_795)"
            >
              Master
            </text>
            <defs>
              <linearGradient
                id="paint0_linear_12_795"
                x1="30.876"
                y1="0.765625"
                x2="2.29087"
                y2="8.2084"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.421875" stop-color="#C2C2AD" />
                <stop offset="0.588542" stop-color="#81805F" />
                <stop offset="0.917708" stop-color="#81805F" />
              </linearGradient>
            </defs>
          </svg>

          <svg viewBox="0 0 92 18">
            <text
              className="title"
              x="0"
              y="15"
              fill="url(#paint0_linear_12_795)"
            >
              The Magic
            </text>
            <defs>
              <linearGradient
                id="paint0_linear_12_795"
                x1="30.876"
                y1="0.765625"
                x2="2.29087"
                y2="8.2084"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.421875" stop-color="#C2C2AD" />
                <stop offset="0.588542" stop-color="#81805F" />
                <stop offset="0.917708" stop-color="#81805F" />
              </linearGradient>
            </defs>
          </svg>

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
            theme={4}
          >
            Get Started Now
          </CustomButton>
        </div>
      </div>
    </>
  );
}

export default Home;
