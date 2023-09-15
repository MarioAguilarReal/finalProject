import React from 'react';

function Footer() {
    return (

        <footer className="text-center text-white" style={{ backgroundColor: "#f1f1f1" }}>
      <div className="container-fluid">
        <div className="row">
          {/* Left column for option links */}
          <div className="col-lg-3 text-start">
            <a href="#!" className="text-dark text-decoration-none d-block mb-2">
              Option 1
            </a>
            <a href="#!" className="text-dark text-decoration-none d-block mb-2">
              Option 2
            </a>
            <a href="#!" className="text-dark text-decoration-none d-block mb-2">
              Option 3
            </a>
            <a href="#!" className="text-dark text-decoration-none d-block mb-2">
              Option 4
            </a>
          </div>

          {/* Right column for text */}
          <div className="col-lg-9 text-lg-end">
            <p className="text-dark">
              <span className="me-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ipsum accusantium voluptas ipsa quasi aliquam nam iure. Praesentium, explicabo totam!</span>
            </p>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google" />
            </a>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © Copyright 2023 SDGKU Final Project
      </div>
    </footer>

    );
}

export default Footer;

