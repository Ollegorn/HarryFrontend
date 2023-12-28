import { useState, useEffect } from "react";
import Tournament from "../Tournament";
import Navbar from "../Navbar";

function Tournaments() {
  const [tournamentsData, setTournamentsData] = useState([]);

  useEffect(() => {
    const tournamentsUrl =
      "https://harrytournament-api.azurewebsites.net/api/Tournament/AllTournamnets";

    fetch(tournamentsUrl)
      .then((res) => res.json())
      .then((data) => {
        setTournamentsData(data);
      })
      .catch((error) => console.log("Error:", error));
      
  }, []);

  return (
    <>
      <Navbar pageTitle={"Tournament Hub"} />
      <h2>All Tournaments!</h2>
      {tournamentsData.map((tournament) => (
        <Tournament
          key={tournament.tournamentId}
          tournamentName={tournament.tournamentName}
          registeredUsers={tournament.registeredUsers}
          rules={tournament.rules}
          prize={tournament.prize}
          tournamentId={tournament.tournamentId}
          duels={tournament.tournamentDuels}
          imageNumber={tournament.imageNumber}
          description={tournament.description}
          startDate={tournament.startDate}
          endDate={tournament.endDate}
          
        />
      ))}
    </>
  );
}

export default Tournaments;
