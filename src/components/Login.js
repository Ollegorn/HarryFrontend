import React from 'react'
import './Login.css';

function Login() {
  return (
    <div className='login'>
      <h6>Login</h6>
      <div className='login__inputgroup'>

        <div className='email-input'>
          <p>Email</p>
          <div className='input-container'>
            <div className='input'>
              <div className='icon-mail_outline'></div>
              <input placeholder='user@example.com'></input>
            </div>
          </div>
        </div>

        <div className='password-input'>
          <p>Password</p>
          <div className='input-container'>
            <div className='input'>
              <div className='icon-mail_outline'></div>
              <input placeholder='password'></input>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
































/*// Login.js
import React, { useState } from 'react';
import SignUp from './SignUp';
import { useUser } from './UserContext'; 
import './Login.css';

function Login({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');

  // Use the useUser hook to get the user context
  const userContext = useUser();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://harrytournament-api.azurewebsites.net/api/Auth/Login', {
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
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('username', username);
  
        // Fetch user roles after successful login
        const rolesResponse = await fetch(
          `https://harrytournament-api.azurewebsites.net/api/Setup/GetUserRoles?name=${username}`,
          {
            headers: {
              Authorization: `Bearer ${data.token}`,
            },
          }
        );
  
        if (rolesResponse.ok) {
          const rolesData = await rolesResponse.json();
          localStorage.setItem('userRoles', JSON.stringify(rolesData));
          userContext.updateUser({ roles: rolesData });
        }
  
        setLoginMessage('Login successful! Redirecting...');
        setTimeout(() => {
          setLoginMessage('');
          onClose();
          window.location.href = '/';
        }, 1000);
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
*/