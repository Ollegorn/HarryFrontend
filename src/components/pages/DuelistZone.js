import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import './DuelistZone.css';
import Duel from '../Duel';

function DuelistZone() {
  const [tournamentsData, setTournamentsData] = useState([]);
  const userId = localStorage.getItem('userId');
  const isLoggedIn = !!userId;

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    const tournamentsUrl =
      'https://harrytournament-api.azurewebsites.net/api/Tournament/AllTournamnets';

    fetch(tournamentsUrl)
      .then((res) => res.json())
      .then((data) => {
        setTournamentsData(data);
      })
      .catch((error) => console.log('Error:', error));
  }, [isLoggedIn]);

  return (
    <>
      <Navbar pageTitle={'Duelist Zone'} />

      {isLoggedIn ? (
        <div id='duels'>
          {tournamentsData.length > 0 ? (
            tournamentsData.map((tournament) => (
              <div key={tournament.tournamentId}>
                {tournament.registeredUsers.some((user) => user.id === userId) ? (
                  <>
                    {tournament.tournamentDuels.length > 0 ? (
                      <>
                        <h3>{tournament.tournamentName}</h3>
                        <h4>Duels:</h4>
                        {tournament.tournamentDuels
                          .filter((duel) => duel.userOne.id === userId || duel.userTwo.id === userId)
                          .map((duel) => (
                            <Duel
                              key={duel.duelId}
                              duelId={duel.duelId}
                              duelName={duel.duelName}
                              duelWins={duel.duelWins}
                              duelDefeats={duel.duelDefeats}
                              userOne={duel.userOne}
                              userTwo={duel.userTwo}
                              isCompleted={duel.isCompleted}
                            />
                          ))}
                      </>
                    ) : (
                      <p>{tournament.tournamentName} - Not started yet</p>
                    )}
                  </>
                ) : (
                  <p>You are not registered in any tournaments</p>
                )}
              </div>
            ))
          ) : (
            <p>You are not registered in any tournaments</p>
          )}
        </div>
      ) : (
        <p>Please log in to access this page.</p>
      )}
    </>
  );
}

export default DuelistZone;
