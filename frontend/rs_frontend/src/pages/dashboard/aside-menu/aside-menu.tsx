import React from "react";
import './aside-menu.scss';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark slide-menu" >
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none">
      <span className="fs-4">Dashboard</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to={'users'} className="nav-link link-light">
            <i className="fa fa-user" />
            Users
        </Link>
      </li>
      <li>
        <Link to={'new-user'} className="nav-link link-light">
          <i className="fa fa-user-plus" />
          New User
        </Link>
      </li>
      <li>
        <Link to={'properties'} className="nav-link link-light">
          <i className="fa fa-home"/>
          Properties
        </Link>
      </li>
      <li>
        <Link to={'dashboard'} className="nav-link link-light">
          <i className="fa fa-home"/>
          New Property
        </Link>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-light text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>Admin</strong>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li>
          <Link to={'/'}></Link>
          </li>
        <li>
          <Link to={'/logout'}></Link>
          </li>
      </ul>
    </div>
  </div>
  );
};

export default Sidebar;
