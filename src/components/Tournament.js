import React from 'react';
import './Tournament.css';
import { Link } from 'react-router-dom';

function Tournament() {
  return (
    <div className='tournament'>
      <h1>Ongoing Tournaments!</h1>
      <div className='tournament-box'>
        <h3>Name:</h3>
        <h4>Top Players:</h4>
        <Link to='sign-up' className='register-btn'>Register</Link>
      </div>
    </div>
  )
}

export default Tournament;