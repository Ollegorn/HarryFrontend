import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './Navbar.css';
import Login from './Login';

Modal.setAppElement('#root');

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
  };

  const handleCloseModal = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    showButton();

    // Check for an existing token in local storage
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
              <Link to="/admins" className="nav-links" onClick={closeMobileMenuAndScrollToTop}>
                Admins
              </Link>
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <button className="nav-links" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <button className="nav-links" onClick={handleLoginClick}>
                  Login
                </button>
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
