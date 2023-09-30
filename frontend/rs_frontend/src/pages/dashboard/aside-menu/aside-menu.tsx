import React from "react";
import './aside-menu.scss';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark slide-menu" >
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
      <span className="fs-4">Dashboard</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <i className="fa fa-user" />
          Users
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-light">
          <i className="fa fa-home"/>
          Properties
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-light">
          <i className="fa fa-home"/>
          New Property
        </a>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-light text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>Admin</strong>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a className="dropdown-item" href="/">Home</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="/">Sign out</a></li>
      </ul>
    </div>
  </div>
  );
};

export default Sidebar;
