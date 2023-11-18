// Login.js
import React, { useState } from 'react';
import SignUp from './SignUp'; // Import your SignUp component
import './Login.css';

function Login({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, such as making an API call
    console.log('Login submitted:', { username, password });
    // Clear the form fields after submission
    setUsername('');
    setPassword('');
  };

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleClose = (e) => {
    // Close the modal only if the click is on the overlay
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="login-container">
        {isSignUp ? (
          <SignUp onClose={onClose} />
        ) : (
          <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
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
              <button type="submit">Login</button>
            </form>
            <button onClick={handleToggleMode}>Not signed up? Sign Up</button>
          </>
        )}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Login;
