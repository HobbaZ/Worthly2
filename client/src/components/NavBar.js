import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import Auth from "../utils/auth";

const AppNavbar = () => {
  return (
    <Container fluid>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <NavLink className="nav-brand ml-3" to="/">
          Worthly
        </NavLink>

        {/*Navbar collapse and expand */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbarToggler">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <nav className="navbar-nav ml-auto mb-2 mb-lg-0">
            <NavLink className="ml-3 my-2 navLink" to="/search">
              Search
            </NavLink>

            {/*Only show if user logged in*/}
            {Auth.loggedIn() ? (
              <>
                <NavLink className="ml-3 my-2 navLink" to="/saved">
                  My Collection
                </NavLink>

                <NavLink className="ml-3 my-2 navLink" to="/profile">
                  My Profile
                </NavLink>

                <Button
                  className="btn noEffect navLink ml-3 col-3 col-sm-2 col-lg-auto"
                  onClick={Auth.logout}
                >
                  {" "}
                  Logout
                </Button>
              </>
            ) : (
              <>
                {/*Show if user not logged in*/}
                <NavLink className="ml-3 my-2 navLink" to="/login">
                  {" "}
                  Login
                </NavLink>

                <NavLink className="ml-3 my-2 navLink" to="/signup">
                  {" "}
                  Signup
                </NavLink>
              </>
            )}
          </nav>
        </div>
      </nav>
    </Container>
  );
};

export default AppNavbar;
