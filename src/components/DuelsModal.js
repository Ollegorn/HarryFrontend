import React, { useContext } from 'react';
import Duel from './Duel';
import { useUser } from './UserContext';


function DuelsModal({ duelsData, onClose }) {
  // Use the useUser hook to get the user information
  const { user } = useUser();

  // Ensure user and user.id exist before using it
  const userId = user && user.id;

  // Filter duels based on the user id
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
