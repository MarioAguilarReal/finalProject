import React from 'react';
import "./footer.scss";

function Footer() {
  return (

    <footer className="text-center text-white footer">
      <div className="container-fluid container">
        <div className="row">
          {/* Left column for option links */}
          <div className="col-lg-3 text-start">
            <a href="#!" className=" text-decoration-none d-block mb-2">
              Option 1
            </a>
            <a href="#!" className=" text-decoration-none d-block mb-2">
              Option 2
            </a>
            <a href="#!" className=" text-decoration-none d-block mb-2">
              Option 3
            </a>
            <a href="#!" className=" text-decoration-none d-block mb-2">
              Option 4
            </a>
          </div>

          {/* Right column for text */}
          <div className="col-lg-9 text-footer text-lg-end">
            <p className="text-footer-child">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, voluptatibus.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid second-section">
        <div className="row">
          <div className="col text-center">
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-dark m-1 social-icon"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-dark m-1 social-icon"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-dark m-1 social-icon"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google" />
            </a>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-dark m-1 social-icon"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-dark m-1 social-icon"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="#!"
              className="btn btn-link btn-floating btn-lg text-dark m-1 social-icon"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © Copyright 2023 SDGKU Final Project
      </div>
    </footer>

  );
}

export default Footer;

