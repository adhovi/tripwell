import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";
import "./Header.css";

import firebase from "firebase/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [loggedUserData, setLoggedUserData] = useContext(UserContext);

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedUserData({
          idLoggedIn: false,
          name: "",
          photoURL: "",
          email: "",
        });
      });
  };
  return (
    <nav className="navbar navbar-expand-lg my-nav pt-2 text-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="TripWell" />
        </Link>
        <button
          className="navbar-toggler icon-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon className="bar-icon" icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destination/Bike">
                Destination
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              {loggedUserData.isLoggedIn && (
                <Link className="nav-link disabled text-white">
                  <b>{loggedUserData.name}</b>
                </Link>
              )}
            </li>
            <li className="nav-item">
              {loggedUserData.isLoggedIn ? (
                <Link className="btn my-btn" onClick={handleSignOut} to="">
                  Logout
                </Link>
              ) : (
                <Link className="btn my-btn" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
