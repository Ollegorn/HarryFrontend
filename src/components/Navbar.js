// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { useUser } from "./UserContext";
import CustomButton from "./CustomButton";
import useScreenSize from "./useScreenSize";
import Popup from "./Popup";

function Navbar({ pageTitle }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authFormType, setAuthFormType] = useState("login"); // Add state for form type
  const screenSize = useScreenSize();

  const userContext = useUser();
  const isAdmin = userContext.user.roles.includes("Admin");

  const handleClick = () => setClick(!click);
  const closeMobileMenuAndScrollToTop = () => {
    setClick(false);
    setShowAuthForm(false);

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
    setAuthFormType("login");
    setShowAuthForm(true);
    setClick(false);
  };

  const handleSignupClick = () => {
    setAuthFormType("signup");
    setShowAuthForm(true);
    setClick(false);
  };


  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    userContext.updateUser({ roles: [] });
    setClick(false);
  };

  const handleCloseModal = () => {
    setShowAuthForm(false);
  };

  useEffect(() => {
    showButton();

    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    showButton();

    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setIsLoggedIn(true);
    }

    if (showAuthForm) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }

    return () => {
      document.body.classList.remove("popup-open");
    };
  }, [showAuthForm]);

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
              <p
                className="page-title"
                onClick={closeMobileMenuAndScrollToTop}
              >
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
                  to="/duelist-zone"
                  className="nav-links"
                  onClick={closeMobileMenuAndScrollToTop}
                >
                  Duelist Zone
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                to="/leaderboard"
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
                  <Link
                    to="/"
                    className="nav-links"
                    onClick={handleLoginClick}
                  >
                    Log In
                  </Link>
                ) : (
                  <Link
                    to="/"
                    className="nav-links"
                    onClick={handleLogout}
                  >
                    Log Out
                  </Link>
                )}
              </li>
            )}
          </ul>
          {screenSize.width > 970 && (!isLoggedIn ? (
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
              onClick={handleLoginClick}
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
      {showAuthForm && (
        <Popup show={showAuthForm} onClose={handleCloseModal}>
          {authFormType === "login" ? (
            <Login onButtonClick={handleLoginClick} onSignupClick={handleSignupClick} />
          ) : (
            <SignUp onButtonClick={handleSignupClick} onLoginClick={handleLoginClick}/>
          )}
        </Popup>
      )}
    </>
  );
}

export default Navbar;
