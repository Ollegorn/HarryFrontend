import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="content-wrapper big-image-03 parallax">
      <div className="footer__content">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <div className="divider"></div>
        <ul className="footer__links">
          <li>
            <Link
              to="/tournaments"
              className="nav-links label label--high-emphasis link-04"
            >
              Tournament Hub
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-links label label--high-emphasis link-04"
            >
              Duelist Zone
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-links label label--high-emphasis link-04"
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-links label label--high-emphasis link-04"
            >
              Rules
            </Link>
          </li>
        </ul>
        <div className="divider"></div>
        <ul className="footer__links">
          <li>
            <Link
              to="/"
              className="nav-links label label--low-emphasis link-secondary-04"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-links label label--low-emphasis link-secondary-04"
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-links label label--low-emphasis link-secondary-04"
            >
              Account
            </Link>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M21.75 4.00191C21.7441 3.38519 21.4953 2.79566 21.0576 2.36113C20.6199 1.92661 20.0286 1.68212 19.4119 1.68066L4.57687 1.63379C3.96076 1.63391 3.36983 1.87833 2.93365 2.31346C2.49746 2.74859 2.25161 3.33893 2.25 3.95504V19.2588C2.25 20.5385 3.29437 21.5088 4.57687 21.5088H17.25L16.6406 19.4463L21.75 24.1338V4.00191ZM15.218 16.3436C15.218 16.3436 14.8092 15.8566 14.468 15.438C15.9558 15.0189 16.5234 14.1025 16.5234 14.1025C16.1148 14.3736 15.6769 14.5977 15.218 14.7705C14.6881 14.9905 14.1364 15.1538 13.5722 15.2575C12.6 15.4361 11.603 15.4323 10.6322 15.2463C10.0611 15.1402 9.50221 14.9769 8.96391 14.7588C8.67914 14.6497 8.40223 14.5211 8.13516 14.3739C8.10094 14.3514 8.06719 14.3402 8.03297 14.3172C8.01 14.306 7.99875 14.2947 7.98609 14.2947C7.78172 14.1813 7.66828 14.1021 7.66828 14.1021C7.66828 14.1021 8.21297 14.9969 9.65484 15.4268C9.31406 15.8571 8.89406 16.3554 8.89406 16.3554C6.38578 16.2761 5.43234 14.6458 5.43234 14.6458C5.43234 11.0336 7.06687 8.10113 7.06687 8.10113C8.70141 6.88941 10.245 6.92363 10.245 6.92363L10.3584 7.05957C8.31516 7.63707 7.38469 8.53145 7.38469 8.53145C7.38469 8.53145 7.63406 8.39551 8.05406 8.2141C9.26859 7.68207 10.2338 7.54613 10.6322 7.50113C10.6958 7.48792 10.7604 7.48023 10.8253 7.47816C11.5859 7.37947 12.3556 7.37192 13.118 7.45566C14.315 7.59317 15.4748 7.95832 16.5347 8.53145C16.5347 8.53145 15.638 7.68066 13.7081 7.1041L13.867 6.92316C13.867 6.92316 15.4219 6.88895 17.0456 8.10254C17.0456 8.10254 18.6802 11.035 18.6802 14.6472C18.6802 14.6341 17.7262 16.2644 15.218 16.3436Z"
            fill="#81805F"
          />
          <path
            d="M9.94004 11.1025C9.29316 11.1025 8.78223 11.6575 8.78223 12.348C8.78223 13.0385 9.30441 13.5935 9.94004 13.5935C10.5869 13.5935 11.0979 13.0389 11.0979 12.348C11.1096 11.6561 10.5869 11.1025 9.94004 11.1025ZM14.0829 11.1025C13.436 11.1025 12.925 11.6575 12.925 12.348C12.925 13.0385 13.4472 13.5935 14.0829 13.5935C14.7302 13.5935 15.2407 13.0389 15.2407 12.348C15.2407 11.6571 14.7189 11.1025 14.0829 11.1025Z"
            fill="#81805F"
          />
        </svg>
      </div>
    </footer>
  );
}

export default Footer;
