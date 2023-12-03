import React, { useState } from 'react';
import './Duel.css';
import UserAvatar from './UserAvatar';
import CustomButton from './CustomButton'; 

function Duel(props) {
  const [showDuel, setShowDuel] = useState(false);
  const [userOneWins, setUserOneWins] = useState(0);
  const [userTwoWins, setUserTwoWins] = useState(0);

  const activeUser = localStorage.getItem("username");

  if (activeUser === props.userOne.userName){
    const opponent = props.userTwo.userName;
  }
  else {
    const opponent = props.userOne.userName;
  }

  const toggleDuel = () => setShowDuel(!showDuel);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://harrytournament-api.azurewebsites.net/api/Duel/UpdateDuel', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          duelId: props.duelId,
          userOneWins: userOneWins,
          userOneDefeats: userTwoWins,
          isCompleted: true
        }),
      });
      
      if (response.ok) {
        console.log('Results submitted successfully');
      } else {
        console.error('Failed to submit results');
      }
    } catch (error) {
      console.error('Error during results submission:', error);
    }
  };
  return (
    <div className='duel'>

      <div className='duel__details'>
        <div className='duel__t-details'>
          <h6>{props.duelName}</h6>
          <p>date</p>
        </div>

        <div className='duel__opponents'>
            <UserAvatar variant={"05"} size={"medium"}/>
            <div className='duel__opponent_team'>
              <p>{activeUser === props.userOne.userName ? props.userTwo.userName : props.userOne.userName}</p>
            </div>
        </div>
      </div>

      <div className='duel__stats-section'>
        <div className='duel__stats-container'>
          <div className='duel__stats'>

            <p className='duel__stats-label'>Won</p>
            <p className='duel__stats-value'>{props.duelWins}</p>

          </div>
          <div className='duel__stats'>
            
            <p className='duel__stats-label'>Lost</p>
            <p className='duel__stats-value'>{props.duelDefeats}</p>

          </div>
          <div className='duel__stats'>
            
            <p className='duel__stats-label'>Points</p>
            <p className='duel__stats-value'>3</p>

          </div>
          <div className='duel__stats'>
            
            <p className='duel__stats-label'>Total</p>
            <p className='duel__stats-value'>{props.userOne.totalTournamentPoints}</p>

          </div>
        </div>
      </div>

      {/* add on click later*/}
      <CustomButton type={"outlined"} size={"medium"} onClick={toggleDuel}>
        Action
      </CustomButton>
      {showDuel && !props.isCompleted &&(
          <>
            <form onSubmit={handleSubmit}>
              <label>
                My Wins:
                <input
                  type="number"
                  value={userOneWins}
                  onChange={(e) => setUserOneWins(e.target.value)}
                />
              </label>
              <label>
              My Defeats:
                <input
                  type="number"
                  value={userTwoWins}
                  onChange={(e) => setUserTwoWins(e.target.value)}
                />
              </label>
              <button type="submit">Submit Results</button>
            </form>
          </>
        )}

    </div>
  )
}

export default Duel;


/*import React, { useState } from 'react';

function Duel(props) {
  const [showDuel, setShowDuel] = useState(false);
  const [userOneWins, setUserOneWins] = useState(0);
  const [userTwoWins, setUserTwoWins] = useState(0);

  const toggleDuel = () => setShowDuel(!showDuel);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://harrytournament-api.azurewebsites.net/api/Duel/UpdateDuel', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          duelId: props.duelId,
          userOneWins: userOneWins,
          userOneDefeats: userTwoWins,
        }),
      });
      
      if (response.ok) {
        console.log('Results submitted successfully');
      } else {
        console.error('Failed to submit results');
      }
    } catch (error) {
      console.error('Error during results submission:', error);
    }
  };

  return (
    <>
      <div className='duel'>
        <h3 onClick={toggleDuel}>{props.duelName}</h3>
        {showDuel && (
          <>
            <form onSubmit={handleSubmit}>
              <label>
                My Wins:
                <input
                  type="number"
                  value={userOneWins}
                  onChange={(e) => setUserOneWins(e.target.value)}
                />
              </label>
              <label>
              My Defeats:
                <input
                  type="number"
                  value={userTwoWins}
                  onChange={(e) => setUserTwoWins(e.target.value)}
                />
              </label>
              <button type="submit">Submit Results</button>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default Duel; */
