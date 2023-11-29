import "./Home.css";
import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection";
import Tournament from "../Tournament";
import Navbar from "../Navbar";
import FeaturedCard from "../FeaturedCard";

function Home() {
  const [tournamentsData, setTournamentsData] = useState([]);

  useEffect(() => {
    const tournamentsUrl =
      "https://localhost:7099/api/Tournament/AllTournamnets";

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
      <Navbar pageTitle={"Home"} />
      <HeroSection
        id="home"
        bgID="02"
        heading="Step into the Arena of Magic"
        body="Welcome to MasterOfMagic, the ultimate platform for duelling
          enthusiasts in the Harry Potter Magic Awakened community. Dive into a
          world where magic duels come alive, and players compete for glory and
          honor in thrilling tournaments."
        ctaText="Begin Your Magical Journey"
      />
      <FeaturedCard />
      {ongoingTournaments.length > 0 && <h2>Ongoing Tournaments!</h2>}
      {ongoingTournaments.map((tournament) => (
        <Tournament
          key={tournament.tournamentId}
          tournamentName={tournament.tournamentName}
          registeredUsers={tournament.registeredUsers}
          rules={tournament.rules}
          prize={tournament.prize}
          tournamentId={tournament.tournamentId}
          duels={tournament.tournamentDuels}
          imageNumber={tournament.imageNumber}
        />
      ))}
      {ongoingTournaments.length === 0 && <h2>No ongoing Tournaments!</h2>}
    </>
  );
}

export default Home;
