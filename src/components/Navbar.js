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

function Navbar({ pageTitle }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const screenSize = useScreenSize();

  // Use the useUser hook to get the user context
  const userContext = useUser();
  const isAdmin = userContext.user.roles.includes("Admin");

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
    setClick(false);
  };

  //delete later
  const fakeData = () => {
    localStorage.setItem("username", "ollegorn");
    localStorage.setItem("userRoles", JSON.stringify(["Admin"]));
    localStorage.setItem("userId", "460cbcfe-da31-4247-8dd9-63a3eaa35d0e")
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    userContext.updateUser({ roles: [] });
    setClick(false);
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
      <nav className="navbar tint-petrol border-gradient border-gradient--01 border-gradient--only-bottom">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={closeMobileMenuAndScrollToTop}
          >
            MasterOfMagic
          </Link>
          {screenSize.width < 970 && (
            <div className="page-title-container">
              <p className="page-title" onClick={closeMobileMenuAndScrollToTop}>
                {pageTitle}
              </p>
            </div>
          )}
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
                  to="/"
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
            {isAdmin && (
              <li className="nav-item">
                <Link
                  to="/admins"
                  className="nav-links"
                  onClick={closeMobileMenuAndScrollToTop}
                >
                  Admin Page
                </Link>
              </li>
            )}

            {screenSize.width < 970 && (
              <li className="nav-item">
                {!isLoggedIn ? (
                  <Link to="/" className="nav-links" onClick={handleLoginClick}>
                    Log In
                  </Link>
                ) : (
                  <Link to="/" className="nav-links" onClick={handleLogout}>
                    Log Out
                  </Link>
                )}
              </li>
            )}
          </ul>
          { screenSize.width > 970 && (!isLoggedIn ? (
            <CustomButton
              className="btn-navbar"
              type="outlined"
              size={
                screenSize.width <= 1104
                  ? "small"
                  : screenSize.width <= 1315
                  ? "medium"
                  : "large"
              }
              onClick={fakeData} //change to handleloginclick later
            >
              Log In
            </CustomButton>
          ) : (
            <CustomButton
              className="btn-navbar"
              type="outlined"
              size={
                screenSize.width <= 1104
                  ? "small"
                  : screenSize.width <= 1315
                  ? "medium"
                  : "large"
              }
              onClick={handleLogout}
            >
              Log Out
            </CustomButton>
          ))}
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
