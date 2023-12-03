import React, { useState } from 'react';

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
              {props.userOne.userName} Wins:
                <input
                  type="number"
                  value={userOneWins}
                  onChange={(e) => setUserOneWins(e.target.value)}
                />
              </label>
              <label>
              {props.userTwo.userName} Wins:
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

export default Duel;
