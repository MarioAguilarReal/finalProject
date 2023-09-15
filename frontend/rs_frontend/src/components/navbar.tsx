import React from 'react';

function Navbar() {
    return (
// {/* <div className="navbar"> 
//         <h3>Menu will be here</h3>
// </div> */}


<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <i className="fa-solid fa-house" />

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
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Option
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Option
          </a>
        </li>
      </ul>
      <a className="nav-link" href="#">
      <i className="fa-solid fa-user nav-item"></i>
      Sign in
          </a> 


        


    </div>
  </div>
</nav>


    );
}

export default Navbar;

