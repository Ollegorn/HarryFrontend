import React, { useEffect, useState } from 'react';
import { useUser } from '../UserContext';
import User from '../User';
import Tournament from '../Tournament';
import './Admins.css';

function Admins() {
  const userContext = useUser();
  const isAdmin = userContext.user.roles.includes('Admin');

  const [usersData, setUsersData] = useState([]);
  const [tournamentsData, setTournamentsData] = useState([]);

  const [showUsers, setShowUsers] = useState(false);
  const [showTournaments, setShowTournaments] = useState(false);

  const [newTournament, setNewTournament] = useState({
    tournamentName: '',
    rules: '',
    prize: '',
  });

  const handleCreateTournament = async () => {
    const apiCreateTournamentUrl = 'https://localhost:7099/api/Tournament/CreateTournament';

    try {
      const response = await fetch(apiCreateTournamentUrl, {
        method: 'POST',
        headers: {
          'Accept': 'text/plain',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTournament),
      });

      if (response.ok) {
        console.log('Tournament created successfully');
        setNewTournament({
          tournamentName: '',
          rules: '',
          prize: '',
        });
      } else {
        console.error('Failed to create tournament');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const usersUrl = 'https://localhost:7099/api/User/AllUsers';
    const tournamentsUrl = 'https://localhost:7099/api/Tournament/AllTournamnets';

    fetch(usersUrl)
      .then(res => res.json())
      .then(data => setUsersData(data))
      .catch(error => console.log('Error:', error));
    
    fetch(tournamentsUrl)
      .then(res => res.json())
      .then(data => setTournamentsData(data))
      .catch(error => console.log('Error:', error));
  }, [tournamentsData]);

  const handleToggleUsers = () => {
    setShowUsers(!showUsers);
  };

  const handleToggleTournaments = () => {
    setShowTournaments(!showTournaments);
  };

  return (
    <div className='admins'>
      <h1>Admins Page</h1>
      {isAdmin ? (
        <>
          <h2 onClick={handleToggleUsers}>Users</h2>
          {showUsers && (
            <div className='usersContainer'>
              {usersData.map(user => (
                <User key={user.id} username={user.userName} wins={user.wins} defeats={user.defeats} totalPoints={user.totalTournamentPoints} id={user.id}/>
              ))}
            </div>
          )}

          <h2 onClick={handleToggleTournaments}>Tournaments</h2>
          {showTournaments && (
            <div className='tournamentsContainer'>
              {tournamentsData.map(tournament => (
                <Tournament key={tournament.tournamentId} 
                tournamentName={tournament.tournamentName}
                registeredUsers={tournament.registeredUsers} 
                rules={tournament.rules} 
                prize={tournament.prize} 
                tournamentId={tournament.tournamentId} 
                duels={tournament.tournamentDuels}
                imageNumber={tournament.imageNumber}
                />
              ))}  
            </div>
          )}
          <div>
            <h2>Create New Tournament</h2>
            <form>
              <label>
                Tournament Name:
                <input
                  type="text"
                  value={newTournament.tournamentName}
                  onChange={(e) =>
                    setNewTournament({ ...newTournament, tournamentName: e.target.value })
                  }
                  required
                />
              </label>
              <label>
                Rules:
                <textarea
                  value={newTournament.rules}
                  onChange={(e) =>
                    setNewTournament({ ...newTournament, rules: e.target.value })
                  }
                  required
                />
              </label>
              <label>
                Prize:
                <input
                  type="text"
                  value={newTournament.prize}
                  onChange={(e) => setNewTournament({ ...newTournament, prize: e.target.value })}
                  required
                />
              </label>
              <label>
                Image Number:
                <input 
                  type='number'
                  value={newTournament.imageNumber}
                  onChange={(e) => setNewTournament({...newTournament, imageNumber:e.target.value})}
                />

              </label>
              <button type="button" onClick={handleCreateTournament} disabled={!newTournament.tournamentName || !newTournament.rules || !newTournament.prize}>
                Create Tournament
              </button>
            </form>
          </div>
        </>
      ) : (
        <p>Access denied. This page is for admins only.</p>
      )}
    </div>
  );
}

export default Admins;
