import React from "react";
// import Navlinks from "../components/Navlinks";
import Navright from "../components/Navright";
import Search from "../components/Search";

// import ProfileDropdown from "./ProfileDropdown";
export default function Header() {
  return (
    <header className="navbar-light fixed-top header-static bg-mode">
      {/* <!--  Logo Nav START --> */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* <!--  Logo START --> */}
          <a className="navbar-brand" href="index.html">
            <img
              className="light-mode-item navbar-brand-item"
              src="assets/images/logo.svg"
              alt="logo"
            />
          </a>
          {/* <!--  Logo END --> */}

          {/* <!--  Responsive navbar toggler --> */}
          <button
            className="navbar-toggler ms-auto icon-md btn btn-light p-0 collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* <!--  Main navbar START --> */}
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <Search />
            {/* <Navlinks /> */}
          </div>
          {/* <!--  Main navbar END --> */}

          <Navright />
        </div>
      </nav>
      {/* <!--  Logo Nav END --> */}
    </header>
  );
}
