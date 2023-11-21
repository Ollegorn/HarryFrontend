import React, { useEffect, useState } from 'react';
import HeroSection from '../HeroSection';
import Tournament from '../Tournament';

function Home() {
  const [tournamentsData, setTournamentsData] = useState([]);

  useEffect(() => {
    const tournamentsUrl = 'https://localhost:7099/api/Tournament/AllTournamnets';

    fetch(tournamentsUrl)
      .then(res => res.json())
      .then(data => {
        setTournamentsData(data);
        console.log('Tournaments Data:', data);
      })
      .catch(error => console.log('Error:', error));
  }, []);

  const hasOngoingTournaments = tournamentsData.some(tournament => tournament.tournamentDuels.length !== 0);

  return (
    <>
      <HeroSection />
      {hasOngoingTournaments && <h2>Ongoing Tournaments!</h2>}
      {hasOngoingTournaments && tournamentsData.map(tournament => {
        console.log('Tournament ID:', tournament.tournamentId);
        return (
          <Tournament
            key={tournament.tournamentId}
            tournamentName={tournament.tournamentName}
            registeredUsers={tournament.registeredUsers}
            rules={tournament.rules}
            prize={tournament.prize}
            tournamentId={tournament.tournamentId}
            duels={tournament.tournamentDuels}
          />
        );
      })}
      {!hasOngoingTournaments && <h2>No ongoing Tournaments!</h2>}
    </>
  );
}

export default Home;
