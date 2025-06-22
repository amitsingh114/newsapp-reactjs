import React from 'react';
import { Link } from "react-router-dom";

const Navbar = ({ toggleMode, mode }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${mode === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["general", "business", "entertainment", "health", "science", "sports", "technology"].map(category => (
              <li className="nav-item" key={category}>
                <Link className="nav-link" to={`/${category === "general" ? "" : category}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <button className="btn btn-secondary" onClick={toggleMode}>Toggle Mode</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
