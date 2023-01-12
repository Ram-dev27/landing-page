/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="d-flex flex-column align-items-center text-center flex-lg-row mt-5 pt-lg-3">
      <div className="d-md-flex gap-lg-5 gap-2 flex-column flex-lg-row">
        <img
          className="ps-3"
          src={logo}
          alt="logo"
          style={{ Width: "158px", height: "48px" }}
        />
        <a
          className="nav-link my-lg-auto  navBarText fw-normal fs-6"
          href="#"
        >
          Terms & Condition
        </a>
        <a
          className="nav-link my-lg-auto navBarText fw-normal fs-6"
          href="#"
        >
          Privacy Policy
        </a>
      </div>
      <div className="my-lg-auto ms-lg-auto me-lg-0 mx-auto fw-light fs-6">
        ® 2019 Company name. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
