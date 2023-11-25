// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import "./Navbar.css";
import Login from "./Login";
import { useUser } from "./UserContext"; // Import useUser hook
import CustomButton from "./CustomButton";
import useScreenSize from "./useScreenSize";

Modal.setAppElement("#root");

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const screenSize = useScreenSize();

  // Use the useUser hook to get the user context
  const userContext = useUser();

  const handleClick = () => setClick(!click);
  const closeMobileMenuAndScrollToTop = () => {
    setClick(false);
    setShowLogin(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
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

    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar border-gradient only-bottom">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenuAndScrollToTop}
          >
            MasterOfMagic
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/tournaments"
                className="nav-links"
                onClick={closeMobileMenuAndScrollToTop}
              >
                Tournament Hub
              </Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <Link
                  to="/admins"
                  className="nav-links"
                  onClick={closeMobileMenuAndScrollToTop}
                >
                  Duelist Zone
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenuAndScrollToTop}
              >
                Leaderboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenuAndScrollToTop}
              >
                Rules
              </Link>
            </li>
          </ul>
          {!isLoggedIn && (
            <CustomButton
              type="outlined"
              size={screenSize.width <= 1104 ? "small" : screenSize.width <= 1315 ? "medium" : "large"}
              onClick={handleLoginClick}
            >
              Sign In
            </CustomButton>
          )}
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
