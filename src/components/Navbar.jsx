/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { UseData } from "../contexts/Data";

function Navbar({ children }) {
  const { isEdit, setIsEdit, formData, setFormData, defaultValue } = UseData();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          UB
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={"/"} className="nav-link active" aria-current="page">
              Home
            </Link>
            <Link to={"/dashboard"} className="nav-link">
              Dashboard
            </Link>
            <Link
              to={"/add"}
              className="nav-link"
              onClick={() => {
                setIsEdit(false);
                setFormData(defaultValue);
              }}
            >
              Add User
            </Link>
          </div>
        </div>
      </div>
      {children}
    </nav>
  );
}

export default Navbar;
