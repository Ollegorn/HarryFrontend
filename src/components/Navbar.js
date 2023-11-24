// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './Navbar.css';
import Login from './Login';
import { useUser } from './UserContext'; // Import useUser hook

Modal.setAppElement('#root');

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use the useUser hook to get the user context
  const userContext = useUser();

  const handleClick = () => setClick(!click);
  const closeMobileMenuAndScrollToTop = () => {
    setClick(false);
    setShowLogin(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    // Update the user context when logging out
    userContext.updateUser({ roles: [] });
  };

  const handleCloseModal = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    showButton();

    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenuAndScrollToTop}>
            GSnitch
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenuAndScrollToTop}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tournaments" className="nav-links" onClick={closeMobileMenuAndScrollToTop}>
                Tournaments
              </Link>
            </li>
            <li className="nav-item">
              {userContext.user && userContext.user.roles.includes('Admin') && (
                <Link to="/admins" className="nav-links" onClick={closeMobileMenuAndScrollToTop}>
                  Admins
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <Link className="nav-links" onClick={handleLogout}>
                  Logout
                </Link>
              ) : (
                <Link className="nav-links" onClick={handleLoginClick}>
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <Modal
        isOpen={showLogin}
        onRequestClose={handleCloseModal}
        contentLabel="Login Modal"
        className="modal"
      >
        <Login onClose={handleCloseModal} />
      </Modal>
    </>
  );
}

export default Navbar;
