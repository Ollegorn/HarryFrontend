import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Link to="/">
          <div className="footer__logo"></div>
        </Link>
        <div className="footer-divider"></div>
        <ul className="footer__links">
          <li className="footer__link-item">
            <Link to="/tournaments" className="footer__link text-shadow">
              Tournament Hub
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link text-shadow">
              Duelist Zone
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link text-shadow">
              Leaderboard
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link text-shadow">
              Rules
            </Link>
          </li>
        </ul>
        <div className="footer-divider"></div>
        <ul className="footer__links">
          <li className="footer__link-item">
            <Link to="/" className="footer__link-secondary text-shadow">
              FAQ
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link-secondary text-shadow">
              Support
            </Link>
          </li>
          <li className="footer__link-item">
            <Link to="/" className="footer__link-secondary text-shadow">
              Account
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
