/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/logo.svg"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex">
        <img src={logo} alt='logo'/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link  px-3 navBarText"  href="#">
            Why Us?
            </a>
            <a className="nav-link px-3 navBarText" href="#">
            Marketing Platform
            </a>
            <a className="nav-link px-3 navBarText" href="#">
              Pricing
            </a>
            <button type="button" className="btn btn-outline-info ms-3 mt-2 mt-lg-0" style={{maxWidth:'300px'}} >Sign Up, It’s Free</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
