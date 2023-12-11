import {useState} from 'react';
import './Login.css';
import { useUser } from './UserContext'; 

function Login({ onSignupClick, onButtonClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Use the useUser hook to get the user context
  const userContext = useUser();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
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
  
  return (
    <div className='login'>
      <h6>Login</h6>
      <div className='login__inputgroup'>
        
        <form onSubmit={handleLoginSubmit}>

          <div className='email-input'>
            <label htmlFor='username'>Username</label>
            <div className='input-container'>
              <div className='input'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M20 4.88373H4C2.9 4.88373 2.01 5.78373 2.01 6.88373L2 18.8837C2 19.9837 2.9 20.8837 4 20.8837H20C21.1 20.8837 22 19.9837 22 18.8837V6.88373C22 5.78373 21.1 4.88373 20 4.88373ZM20 18.8837H4V8.88373L12 13.8837L20 8.88373V18.8837ZM12 11.8837L4 6.88373H20L12 11.8837Z" fill="#B0B3BF"/>
              </svg>
                <input 
                  type='text'
                  id='username'
                  value={username}
                  onChange={handleUsernameChange}
                  required
                  placeholder='user@example.com' />
              </div>
            </div>
          </div>

          <div className='email-input'>
            <label htmlFor='password'>Password</label>
            <div className='input-container'>
              <div className='input'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M6 22.8837C5.45 22.8837 4.97933 22.6881 4.588 22.2967C4.19667 21.9054 4.00067 21.4344 4 20.8837V10.8837C4 10.3337 4.196 9.86306 4.588 9.47173C4.98 9.08039 5.45067 8.88439 6 8.88373H7V6.88373C7 5.50039 7.48767 4.32139 8.463 3.34673C9.43833 2.37206 10.6173 1.88439 12 1.88373C13.3833 1.88373 14.5627 2.37139 15.538 3.34673C16.5133 4.32206 17.0007 5.50106 17 6.88373V8.88373H18C18.55 8.88373 19.021 9.07973 19.413 9.47173C19.805 9.86373 20.0007 10.3344 20 10.8837V20.8837C20 21.4337 19.8043 21.9047 19.413 22.2967C19.0217 22.6887 18.5507 22.8844 18 22.8837H6ZM6 20.8837H18V10.8837H6V20.8837ZM12 17.8837C12.55 17.8837 13.021 17.6881 13.413 17.2967C13.805 16.9054 14.0007 16.4344 14 15.8837C14 15.3337 13.8043 14.8631 13.413 14.4717C13.0217 14.0804 12.5507 13.8844 12 13.8837C11.45 13.8837 10.9793 14.0797 10.588 14.4717C10.1967 14.8637 10.0007 15.3344 10 15.8837C10 16.4337 10.196 16.9047 10.588 17.2967C10.98 17.6887 11.4507 17.8844 12 17.8837ZM9 8.88373H15V6.88373C15 6.05039 14.7083 5.34206 14.125 4.75873C13.5417 4.17539 12.8333 3.88373 12 3.88373C11.1667 3.88373 10.4583 4.17539 9.875 4.75873C9.29167 5.34206 9 6.05039 9 6.88373V8.88373Z" fill="#E8E9ED"/>
              </svg>
                <input 
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder='password'/>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" onClick={handleTogglePassword} style={{ cursor: 'pointer' }}>
                  <path d="M12 9.88373C12.7956 9.88373 13.5587 10.1998 14.1213 10.7624C14.6839 11.325 15 12.0881 15 12.8837C15 13.6794 14.6839 14.4424 14.1213 15.005C13.5587 15.5677 12.7956 15.8837 12 15.8837C11.2044 15.8837 10.4413 15.5677 9.87868 15.005C9.31607 14.4424 9 13.6794 9 12.8837C9 12.0881 9.31607 11.325 9.87868 10.7624C10.4413 10.1998 11.2044 9.88373 12 9.88373ZM12 5.38373C17 5.38373 21.27 8.49373 23 12.8837C21.27 17.2737 17 20.3837 12 20.3837C7 20.3837 2.73 17.2737 1 12.8837C2.73 8.49373 7 5.38373 12 5.38373ZM3.18 12.8837C3.98825 14.534 5.24331 15.9245 6.80248 16.897C8.36165 17.8695 10.1624 18.385 12 18.385C13.8376 18.385 15.6383 17.8695 17.1975 16.897C18.7567 15.9245 20.0117 14.534 20.82 12.8837C20.0117 11.2334 18.7567 9.84298 17.1975 8.87047C15.6383 7.89797 13.8376 7.38241 12 7.38241C10.1624 7.38241 8.36165 7.89797 6.80248 8.87047C5.24331 9.84298 3.98825 11.2334 3.18 12.8837Z" fill="#E8E9ED"/>
                </svg>
                
                </div>
              </div>
            </div>

            <div className='button-tertiary'>
              <div className='state-layer'>
                <p>Forgot Password?</p>
              </div>
            </div>

            <div className='button-stack'>
              <div className='login-btn'>
                  <button className='state-layer' type='submit'>Login</button>
              </div>
            </div>
        </form>
        <div className="login-message">{loginMessage}</div>


          <div className='social-login'>

          <div className='sign-up-prompt' onClick={() => { onButtonClick(); onSignupClick(); }}>
              <div className='state-layer'>
                <h6>Don't have an account?</h6>
                <p> Sign Up</p>
              </div>
            </div>
            <div className='login-divider'>
              <div className='split-line'></div>
              <p>OR</p>
              <div className='split-line'></div>
            </div>

            <div className='social-btn'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M10.2599 11.3382C9.99236 11.3602 9.74293 11.482 9.5611 11.6794C9.37926 11.8768 9.27832 12.1354 9.27832 12.4038C9.27832 12.6722 9.37926 12.9308 9.5611 13.1282C9.74293 13.3256 9.99236 13.4474 10.2599 13.4694C10.3945 13.4645 10.5268 13.4329 10.6491 13.3766C10.7715 13.3202 10.8815 13.2402 10.9727 13.1411C11.064 13.0421 11.1347 12.9259 11.1808 12.7993C11.227 12.6728 11.2476 12.5384 11.2415 12.4038C11.2481 12.2691 11.2278 12.1345 11.1818 12.0077C11.1359 11.8809 11.0652 11.7646 10.9738 11.6654C10.8825 11.5662 10.7723 11.4862 10.6497 11.43C10.5271 11.3739 10.3946 11.3426 10.2599 11.3382ZM13.7639 11.3382C13.5494 11.3206 13.3346 11.3681 13.1475 11.4745C12.9605 11.5809 12.8099 11.7413 12.7155 11.9347C12.621 12.1281 12.5872 12.3454 12.6183 12.5584C12.6494 12.7713 12.7441 12.9699 12.8899 13.1282C13.0357 13.2865 13.2258 13.3971 13.4355 13.4455C13.6452 13.494 13.8646 13.478 14.0651 13.3998C14.2656 13.3215 14.4377 13.1846 14.5591 13.0069C14.6805 12.8292 14.7455 12.619 14.7455 12.4038C14.7516 12.2694 14.731 12.1352 14.6851 12.0088C14.6391 11.8824 14.5686 11.7663 14.4776 11.6673C14.3866 11.5682 14.2769 11.4882 14.1548 11.4317C14.0327 11.3752 13.9007 11.3434 13.7663 11.3382H13.7639Z" fill="#E8E9ED"/>
                <path d="M18.4316 3.28381L5.56762 3.28381C5.30835 3.28444 5.05174 3.33617 4.81247 3.43605C4.57321 3.53592 4.35597 3.68198 4.1732 3.86587C3.99042 4.04977 3.84568 4.26788 3.74726 4.50775C3.64885 4.74762 3.59868 5.00454 3.59962 5.26381L3.59962 18.2406C3.59868 18.4999 3.64885 18.7568 3.74726 18.9967C3.84568 19.2365 3.99042 19.4547 4.1732 19.6386C4.35597 19.8224 4.57321 19.9685 4.81247 20.0684C5.05174 20.1683 5.30835 20.22 5.56762 20.2206L16.454 20.2206L15.9452 18.4446L17.174 19.5846L18.3356 20.6598L20.3996 22.4838L20.3996 5.26381C20.4006 5.00454 20.3504 4.74762 20.252 4.50775C20.1536 4.26788 20.0088 4.04977 19.826 3.86587C19.6433 3.68198 19.426 3.53592 19.1868 3.43605C18.9475 3.33617 18.6909 3.28444 18.4316 3.28381ZM14.726 15.8238C14.726 15.8238 14.3804 15.411 14.0924 15.0438C14.7888 14.8811 15.4052 14.4773 15.8324 13.9038C15.487 14.1337 15.1166 14.3237 14.7284 14.4702C14.2818 14.6608 13.8147 14.7994 13.3364 14.883C12.5142 15.0344 11.671 15.0311 10.85 14.8734C10.368 14.7791 9.89566 14.6409 9.43882 14.4606C9.05306 14.311 8.68453 14.1203 8.33962 13.8918C8.75045 14.4537 9.34469 14.8544 10.0196 15.0246C9.73162 15.3894 9.37642 15.8214 9.37642 15.8214C8.80616 15.8368 8.24085 15.7118 7.73026 15.4573C7.21968 15.2029 6.77948 14.8268 6.44842 14.3622C6.47883 12.4162 6.9507 10.5025 7.82842 8.76541C8.60222 8.15774 9.54571 7.8055 10.5284 7.75741L10.6244 7.87261C9.70065 8.10123 8.8386 8.53061 8.09962 9.13021C8.09962 9.13021 8.31082 9.01501 8.66602 8.85181C9.35683 8.53658 10.0931 8.33246 10.8476 8.24701C10.9014 8.23589 10.956 8.22947 11.0108 8.22781C11.6541 8.144 12.3052 8.13755 12.95 8.20861C13.9641 8.32444 14.9457 8.63752 15.8396 9.13021C15.1381 8.55918 14.3233 8.14361 13.4492 7.91101L13.5836 7.75741C14.5663 7.8055 15.5098 8.15774 16.2836 8.76541C17.1613 10.5025 17.6332 12.4162 17.6636 14.3622C17.3301 14.8267 16.8881 15.2027 16.3762 15.4575C15.8642 15.7122 15.2977 15.838 14.726 15.8238Z" fill="#E8E9ED"/>
              </svg>
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default Login;

