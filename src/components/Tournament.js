import React, { useState } from 'react';
import './Tournament.css';
import { useUser } from './UserContext';
import DuelsModal from './DuelsModal';

function Tournament(props) {
  const [expandedTournamentId, setExpandedTournamentId] = useState(null);
  const [topWizards, setTopWizards] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showDuelsModal, setShowDuelsModal] = useState(false);
  const [duelsData, setDuelsData] = useState([]);

  const userContext = useUser();
  const isAdmin = userContext.user.roles.includes('Admin');

  const handleDetailsToggle = async (tournamentId) => {
    setExpandedTournamentId(
      expandedTournamentId === tournamentId ? null : tournamentId
    );

    if (expandedTournamentId !== tournamentId) {
      const topWizardsData = props.registeredUsers.slice(0, 3);
      setTopWizards(topWizardsData);
    } else {
      setTopWizards([]);
    }
  };

  const handleShowDuels = () => {
    // Call the getDuelsDetails function to fetch duelsData
    getDuelsDetails();
    // Show the DuelsModal
    setShowDuelsModal(true);
  };

  const startTournament = async () => {
    const apiStartUrl = `https://localhost:7099/api/Tournament/StartTournament?tournamentId=${props.tournamentId}`;
    try {
      const response = await fetch(apiStartUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (response.ok) {
        console.log('Tournament started successfully');
      } else {
        console.error('Failed to start tournament');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getDuelsDetails = async () => {
    const duelsUrl = 'https://localhost:7099/api/Duel/AllDuels';
  
    try {
      const response = await fetch(duelsUrl);
  
      if (response.ok) {
        const data = await response.json();
        console.log('Duel Details:', data);
        setDuelsData(data);
      } else {
        console.error('Failed to fetch duels details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const deleteTournament = async () => {
    const apiDeleteUrl = `https://localhost:7099/api/Tournament/DeleteTournament?id=${props.tournamentId}`;
  
    try {
      const response = await fetch(apiDeleteUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        console.log('Tournament deleted successfully');
        setIsDeleted(true);
      } else {
        console.error('Failed to delete tournament');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (isDeleted) {
    return null;
  }

  const isStarted = props.duels.length === 0
  return (
    <div className="tournament">
      <div key={props.tournamentId} className="tournament-box">
        <h3>Name: {props.tournamentName}</h3>
        <h4>Rules: {props.rules}</h4>
        <p>Prize: {props.prize}</p>
        <p>Number of Wizards: {props.registeredUsers.length}</p>

        {expandedTournamentId === props.tournamentId && (
          <div className="expanded-details">
            <h3>Top 3 Wizards:</h3>
            <ul>
              {topWizards.map((wizard) => (
                <li key={wizard.userName}>
                  {wizard.userName} - Wins: {wizard.wins}, Defeats: {wizard.defeats}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="btn-container">
          <button className="details-btn" onClick={() => handleDetailsToggle(props.tournamentId)}>
            {expandedTournamentId === props.tournamentId ? 'Hide Details' : 'Show Details'}
          </button>
          {isAdmin && <button className='delete-btn' onClick={deleteTournament}>Delete</button>}
          {isAdmin && isStarted && (
            <button className='details-btn' onClick={startTournament}>
              Start Tournament
            </button>
          )}
          {isStarted && (<button>Register</button>)}
          {!isStarted && <button onClick={handleShowDuels}>Show My duels</button>}
        </div>
        {showDuelsModal && (
        <DuelsModal duelsData={duelsData} onClose={() => setShowDuelsModal(false)} />
      )}
      </div>
    </div>
  );
}

export default Tournament;
