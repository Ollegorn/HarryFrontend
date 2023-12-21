// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { useUser } from "./UserContext";
import CustomButton from "./CustomButton";
import { useScreenSize, breakPoint } from "./useScreenSize";
import Popup from "./Popup";

function Navbar({ pageTitle, theme }) {
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
      <nav
        className={
          click
            ? `navbar active border-gradient border-gradient--0${4} border-gradient--only-bottom`
            : `navbar border-gradient border-gradient--0${4} border-gradient--only-bottom`
        }
      >
        <Link to="/" onClick={closeMobileMenuAndScrollToTop}>
          <span className={click ? `logo inactive` : `logo`}></span>
        </Link>
        {screenSize.width < breakPoint.desktop && (
          <p
            className={
              click
                ? `title title--high-emphasis page-title link-0${theme} inactive`
                : `title title--high-emphasis page-title link-0${theme}`
            }
            onClick={closeMobileMenuAndScrollToTop}
          >
            {pageTitle}
          </p>
        )}
        <div className="menu-icon" onClick={handleClick}>
          <i
            className={
              click ? `fas fas-0${theme} fa-times` : `fas fas-0${theme} fa-bars`
            }
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link
              to="/tournaments"
              className={`nav-links label label--high-emphasis link-0${theme}`}
              onClick={closeMobileMenuAndScrollToTop}
            >
              Tournament Hub
            </Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link
                to="/duelist-zone"
                className={`nav-links label label--high-emphasis link-0${theme}`}
                onClick={closeMobileMenuAndScrollToTop}
              >
                Duelist Zone
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/leaderboard"
              className={`nav-links label label--high-emphasis link-0${theme}`}
              onClick={closeMobileMenuAndScrollToTop}
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`nav-links label label--high-emphasis link-0${theme}`}
              onClick={closeMobileMenuAndScrollToTop}
            >
              Rules
            </Link>
          </li>
          {isAdmin && (
            <li>
              <Link
                to="/admins"
                className={`nav-links label label--high-emphasis link-0${theme}`}
                onClick={closeMobileMenuAndScrollToTop}
              >
                Admin Page
              </Link>
            </li>
          )}

          {screenSize.width < breakPoint.desktop && (
            <li>
              {!isLoggedIn ? (
                <Link
                  to="/"
                  className={`nav-links label label--high-emphasis link-0${theme}`}
                  onClick={handleLoginClick}
                >
                  Log In
                </Link>
              ) : (
                <Link
                  to="/"
                  className={`nav-links label label--high-emphasis link-0${theme}`}
                  onClick={handleLogout}
                >
                  Log Out
                </Link>
              )}
            </li>
          )}
        </ul>
        {screenSize.width > breakPoint.desktop &&
          (!isLoggedIn ? (
            <CustomButton
              className="btn-navbar"
              type="outlined"
              size={
                screenSize.width > breakPoint.desktopLarge
                  ? "extra-large"
                  : screenSize.width > breakPoint.desktop
                  ? "large"
                  : screenSize.width > breakPoint.tablet
                  ? "medium"
                  : "small"
              }
              theme={theme}
              onClick={handleLoginClick}
            >
              Log In
            </CustomButton>
          ) : (
            <CustomButton
              className="btn-navbar"
              type="outlined"
              size={
                screenSize.width > breakPoint.desktopLarge
                  ? "extra-large"
                  : screenSize.width > breakPoint.desktop
                  ? "large"
                  : screenSize.width > breakPoint.tablet
                  ? "medium"
                  : "small"
              }
              onClick={handleLogout}
              theme={theme}
            >
              Log Out
            </CustomButton>
          ))}
      </nav>
      {showAuthForm && (
        <Popup show={showAuthForm} onClose={handleCloseModal}>
          {authFormType === "login" ? (
            <Login
              onButtonClick={handleLoginClick}
              onSignupClick={handleSignupClick}
            />
          ) : (
            <SignUp
              onButtonClick={handleSignupClick}
              onLoginClick={handleLoginClick}
            />
          )}
        </Popup>
      )}
    </>
  );
}

export default Navbar;
