import "./Home.css";
import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import FeaturedSection from "../FeaturedSection";
import FeaturedEventsSection from "../FeaturedEventsSection";
import HighlightSection from "../HighlightSection";
import RulesSection from "../RulesSection";

function Home() {
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
        {/*<HighlightSection />*/}
        <RulesSection />
      </div>
    </>
  );
}

export default Home;
