import React, { useState, useEffect } from 'react';
import './Tournament.css';
import CustomBadge from './CustomBadge';
import CustomButton from './CustomButton';
import { useUser } from './UserContext';

function Tournament(props) {
  const [expandedTournamentId, setExpandedTournamentId] = useState(null);
  const [topWizards, setTopWizards] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showDuelsModal, setShowDuelsModal] = useState(false);
  const [duelsData, setDuelsData] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const images = [
    '/Images/Events/event_01.jpg',
    '/Images/Events/event_02.jpg',
    '/Images/Events/event_03.jpg',
    '/Images/Events/event_04.jpg',
    '/Images/Events/event_05.jpg',
    '/Images/Events/event_06.jpeg',
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
    setIsExpanded(!isExpanded);
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
    <div key={props.tournamentId} className={`tournament${isExpanded ? ' expanded' : ''}`}>

      <div className='tournament__content-container'>
        <div className='card-content'>
          <div className='badge-stack'>
            {props.rules.map((rule, index) => (
              <CustomBadge key={index}>{rule}</CustomBadge>
            ))}
          </div>
          <h6>{props.tournamentName}</h6>
          <p>Prize: {props.prize}</p>
          <p className='tournament-dates'>{formatDate(props.startDate)} - {formatDate(props.endDate)}</p>
          <p className='tournament-description'>{props.description}</p>

          {isExpanded && (
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
        </div>

        
        <div className='tournament-actions'>
          <CustomButton type={"outlined"} size={"medium"} onClick={() => handleDetailsToggle(props.tournamentId)}>
            {expandedTournamentId === props.tournamentId ? "Hide Details" : "Learn More"}
          </CustomButton>

          {isStarted && !isRegistered && (
            <CustomButton size={"medium"} onClick={() => registerUser(props.tournamentId)}>
              Register Now
            </CustomButton>
          )}

          {!isStarted && (
            <CustomButton size={"medium"} onClick={handleShowDuels}>
              Show Duels
            </CustomButton>
          )}
        </div>
        {isAdmin && isExpanded && <div className='admin-btns'>
              <CustomButton size={"small"} onClick={deleteTournament}>Delete</CustomButton>
              {isStarted && <CustomButton size={"small"} onClick={startTournament}>Start Tournament</CustomButton>}
            </div>
        }        
      </div>

      <div className={`tournament__img dynamic-background`} style={{backgroundImage: `url(${images[props.   imageNumber]})`}}>
      </div>

    </div>
  )
}

export default Tournament

