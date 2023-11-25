import React, { useEffect, useState } from "react";
import HeroSection from "../HeroSection";
import Tournament from "../Tournament";

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
      <HeroSection />
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
