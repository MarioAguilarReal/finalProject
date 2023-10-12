import React from 'react';
import "./navbar.scss";
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid box-fx">
        <Link to={'/'} className="navbar-brand">
          <img src={require('./logo.png')} alt=""  className='logo img-link box-fx'/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              {/* <Link to={'/'} className="nav-link active " aria-current="page">
                Home
              </Link> */}
            </li>
          </ul>
          <Link to="/login" className="nav-link">
            <i className="fa-solid fa-user nav-item"></i>
            &nbsp;Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
