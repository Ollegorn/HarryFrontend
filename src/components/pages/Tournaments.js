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
      /*setTournamentsData([
        {
          "tournamentName": "empty tournament",
          "tournamentId": "183305dc-2998-4079-61c4-08dbef47d028",
          "rules": "sadasd",
          "prize": "asdasda",
          "imageNumber": 0,
          "registeredUsers": [],
          "tournamentDuels": []
        },
        {
          "tournamentName": "tournament with users",
          "tournamentId": "e1e93ffb-ac9c-4422-61c5-08dbef47d028",
          "rules": "asdasd",
          "prize": "asdas",
          "imageNumber": 0,
          "registeredUsers": [
            {
              "userName": "ollegorn",
              "wins": 0,
              "defeats": 0,
              "totalTournamentPoints": 0,
              "id": null
            },
            {
              "userName": "string",
              "wins": 0,
              "defeats": 0,
              "totalTournamentPoints": 0,
              "id": null
            }
          ],
          "tournamentDuels": []
        },
        {
          "tournamentName": "ongoing tournament",
          "tournamentId": "70ba63b2-dc0c-4251-61c6-08dbef47d028",
          "rules": "asdas",
          "prize": "asdasd",
          "imageNumber": 0,
          "registeredUsers": [
            {
              "userName": "ollegorn",
              "wins": 0,
              "defeats": 0,
              "totalTournamentPoints": 0,
              "id": null
            },
            {
              "userName": "string",
              "wins": 0,
              "defeats": 0,
              "totalTournamentPoints": 0,
              "id": null
            }
          ],
          "tournamentDuels": [
            {
              "duelId": "cf2ac188-0bac-46f0-735f-08dbef485071",
              "duelName": "ollegorn vs string",
              "userOne": {
                "userName": "ollegorn",
                "wins": 0,
                "defeats": 0,
                "totalTournamentPoints": 0,
                "id": null
              },
              "userTwo": {
                "userName": "string",
                "wins": 0,
                "defeats": 0,
                "totalTournamentPoints": 0,
                "id": null
              }
            }
          ]
        }
      ]);*/
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
          details={tournament.details}
          startDate={tournament.startDate}
          endDate={tournament.endDate}
        />
      ))}
    </>
  );
}

export default Tournaments;
