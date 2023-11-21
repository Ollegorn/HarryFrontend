import React, { useState } from 'react';

function Duel(props) {
  const [showDuel, setShowDuel] = useState(false);

  const toggleDuel = () => setShowDuel(!showDuel);

  return (
    <>
      <div className='duel'>
        <h3 onClick={toggleDuel}>{props.duelName}</h3>
        {showDuel && (
          <>
            <h4>{props.userTwo.userName}</h4>
            <p>ID: {props.userTwo.id}</p>
            <h4>{props.userOne.userName}</h4>
            <p>ID: {props.userOne.id}</p>
          </>
        )}
      </div>
    </>
  );
}

export default Duel;
