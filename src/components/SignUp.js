import React, { useState } from 'react';
import './SignUp.css';

function SignUp({ onClose }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://harrytournament-api.azurewebsites.net/api/Auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: userName,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        setSignupMessage('Sign Up successful! Please close the window and Login');
      } else {
        setSignupMessage('Sign Up failed. Please try again.');
        console.error('Sign Up failed');
      }
    } catch (error) {
      setSignupMessage('Error during Sign Up. Please try again.');
      console.error('Error during Sign Up:', error);
    }
  };

  const handleClose = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignupSubmit}>
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={handleUserNameChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className='signup-btn'>Sign Up</button>
        </form>
        <div className="signup-message">{signupMessage}</div>
      </div>
    </div>
  );
}

export default SignUp;
