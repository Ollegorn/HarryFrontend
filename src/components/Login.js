// Login.js
import React, { useState } from 'react';
import SignUp from './SignUp';
import './Login.css';

function Login({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://localhost:7099/api/Auth/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('jwtToken', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);

        setLoginMessage('Login successful! Redirecting...');
        setTimeout(() => {
          setLoginMessage('');
          onClose();
          window.location.href = '/';
        }, 2000);
      } else {
        setLoginMessage('Login failed. Please check your credentials.');
        console.error('Login failed');
      }
    } catch (error) {
      setLoginMessage('Error during login. Please try again.');
      console.error('Error during login:', error);
    }
  };

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleClose = (e) => {
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
            <form onSubmit={handleLoginSubmit}>
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
            <div className="login-message">{loginMessage}</div>
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
