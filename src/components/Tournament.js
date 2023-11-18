import React, { useEffect, useState } from 'react';
import './Tournament.css';
import { Link } from 'react-router-dom';

function Tournament() {
  const [tournamentData, setTournamentData] = useState([]);
  const [expandedTournamentId, setExpandedTournamentId] = useState(null);
  const [topWizards, setTopWizards] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://localhost:7099/api/Tournament/AllTournamnets';

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setTournamentData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleDetailsToggle = async (tournamentId) => {
    setExpandedTournamentId(expandedTournamentId === tournamentId ? null : tournamentId);

    // Fetch top 3 wizards when "Details" button is clicked
    if (expandedTournamentId !== tournamentId) {
      const selectedTournament = tournamentData.find(tournament => tournament.tournamentId === tournamentId);
      const topWizardsData = selectedTournament.registeredUsers.slice(0, 3);
      setTopWizards(topWizardsData);
    } else {
      setTopWizards([]);
    }
  };

  return (
    <div className='tournament'>
      {tournamentData.length === 0 ? (
        <h1>No Ongoing Tournaments</h1>
      ) : (
        <>
          <h1>Ongoing Tournaments!</h1>
          {tournamentData.map(tournament => (
            <div key={tournament.tournamentId} className='tournament-box'>
              <h3>Name: {tournament.tournamentName}</h3>
              <h4>Rules: {tournament.rules}</h4>
              <p>Prize: {tournament.prize}</p>
              <p>Number of Wizards: {(tournament.registeredUsers).length}</p>

              {expandedTournamentId === tournament.tournamentId && (
                <div className='expanded-details'>
                  <h2>Top 3 Wizards:</h2>
                  <ul>
                    {topWizards.map(wizard => (
                      <li key={wizard.userName}>
                        {wizard.userName} - Wins: {wizard.wins}, Defeats: {wizard.defeats}
                      </li>
                    ))}
                  </ul>
                  {/* Add more details as needed */}
                </div>
              )}

              <div className='btn-container'>
                <Link to='sign-up' className='register-btn'>Register</Link>
                <button className='register-btn' onClick={() => handleDetailsToggle(tournament.tournamentId)}>
                  {expandedTournamentId === tournament.tournamentId ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Tournament;
