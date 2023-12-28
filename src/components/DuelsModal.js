import React from 'react';
import Duel from './Duel';
import { useUser } from './UserContext';

function DuelsModal({ duelsData, onClose }) {
  const userContext = useUser();
  const userId = localStorage.getItem('userId'); 

  const userDuels = duelsData.filter(
    (duel) => duel.userOne.id === userId || duel.userTwo.id === userId
  );

  return (
    <div className="duels-modal">
      <h2>Your Duels</h2>
      <ul>
        {userDuels.map((duel) => (
          <Duel key={duel.duelId} {...duel} />
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default DuelsModal;
