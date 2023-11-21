import React from 'react';
import './User.css'

function User(props) {
  return (
    <div className='user'>
      <h3>Username: {props.username} </h3> 
      <p>Wins: {props.wins}</p>
      <p>Defeats: {props.defeats}</p>
      <p>Total Points: {props.totalPoints}</p>
      <p>Id: {props.id}</p> 
      <button className='delete-btn'>Delete User</button>
    </div>
  )
}

export default User;