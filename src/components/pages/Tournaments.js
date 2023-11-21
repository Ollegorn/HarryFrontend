import {useState, useEffect} from 'react';
import Tournament from '../Tournament';

function Tournaments() {
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

  return (
    <>
      <h2>All Tournaments!</h2>
       {tournamentsData.map(tournament => 
          <Tournament
            key={tournament.tournamentId}
            tournamentName={tournament.tournamentName}
            registeredUsers={tournament.registeredUsers}
            rules={tournament.rules}
            prize={tournament.prize}
            tournamentId={tournament.tournamentId}
            duels={tournament.tournamentDuels}
          />
        )}
    </>
  );
}

export default Tournaments