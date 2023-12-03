import React, { useState, useEffect } from 'react';
import './Tournament.css';
import { useUser } from './UserContext';
import DuelsModal from './DuelsModal';

function Tournament(props) {
  const [expandedTournamentId, setExpandedTournamentId] = useState(null);
  const [topWizards, setTopWizards] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showDuelsModal, setShowDuelsModal] = useState(false);
  const [duelsData, setDuelsData] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);

  const images = [
                  '/Images/Events/event_01.jpg',
                  '/Images/Events/event_02.jpg',
                  '/Images/Events/event_03.jpg',
                  '/Images/Events/event_04.jpg',
                  '/Images/Events/event_05.jpg',
                  '/Images/Events/event_06.jpg',
                  '/Images/Events/event_07.jpg',
                  '/Images/Events/event_08.jpg',
                  '/Images/Events/event_09.jpg',
                  '/Images/Events/event_10.jpg'
                ]
  const userContext = useUser();
  const isAdmin = userContext.user.roles.includes('Admin');

  useEffect(() => {
    const username = localStorage.getItem('username');
    const isUserRegistered = props.registeredUsers.some(user => user.userName === username);
    setIsRegistered(isUserRegistered);
  }, [props.registeredUsers]);

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
    getDuelsDetails();
    setShowDuelsModal(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  

  const registerUser = async (tournamentId) => {
    try {
        const username = localStorage.getItem('username');

        const requestBody = {
            tournamentId: tournamentId,
            username: username,
        };

        const response = await fetch('https://harrytournament-api.azurewebsites.net/api/Tournament/AddUserToTournament', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody),
        });

        if (response.ok) {
            console.log('User registration successful');
            setIsRegistered(true);
        } else {
            console.error('User registration failed');
        }
    } catch (error) {
        console.error('Error during user registration:', error);
    }
};


  const startTournament = async () => {
    const apiStartUrl = `https://harrytournament-api.azurewebsites.net/api/Tournament/StartTournament?tournamentId=${props.tournamentId}`;
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
    const duelsUrl = 'https://harrytournament-api.azurewebsites.net/api/Duel/AllDuels';
  
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
    const apiDeleteUrl = `https://harrytournament-api.azurewebsites.net/api/Tournament/DeleteTournament?id=${props.tournamentId}`;
  
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
      

      <div className='tournament-box'>
        
        <div key={props.tournamentId} className='tournament-details'>
          <h3>{props.tournamentName}</h3>
          <h4>Rules: {props.rules}</h4>
          <p>Prize: {props.prize}</p>
          <p>Description: {props.description}</p>
          <p>Dates: {formatDate(props.startDate)} - {formatDate(props.endDate)}</p>
          <p>Number of Wizards: {props.registeredUsers.length}</p>
        </div>

        <div className='tournament-btns'>
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

            <div>
              <button className="details-btn" onClick={() => handleDetailsToggle(props.tournamentId)}>
                {expandedTournamentId === props.tournamentId ? 'Hide Details' : 'Learn More'}
              </button>

              {isStarted && !isRegistered && (<button className='user-btn' onClick={() => registerUser(props.tournamentId)}
              >Register</button>)}

              {!isStarted && <button className='user-btn' onClick={handleShowDuels}>Show My duels</button>}
            </div>
            {isAdmin && <div className='admin-btns'>
              <button className='delete-btn' onClick={deleteTournament}>Delete</button>
              {isStarted && <button className='details-btn' onClick={startTournament}>Start Tournament</button>}
            </div>

            }
            
            
            

            
          </div>
          {showDuelsModal && (
            <DuelsModal duelsData={duelsData} onClose={() => setShowDuelsModal(false)} />
          )}
          </div>
        </div>
      
      <div className='tournament-img'>
        <img src={process.env.PUBLIC_URL + images[props.imageNumber]} />
      </div>

    </div>
  );
}

export default Tournament;
