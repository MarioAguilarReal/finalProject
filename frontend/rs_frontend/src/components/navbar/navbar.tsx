import React from 'react';
import "./navbar.scss";

 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid box-fx">
        <a className="navbar-brand" href="#">
          <img src={require('./logo.png')} alt=""  className='logo img-link box-fx'/>
          
        </a>
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
              <a className="nav-link active " aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/new-users">
                New User
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
          <a className="nav-link" href="#">
            <i className="fa-solid fa-user nav-item"></i>
            &nbsp;Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
