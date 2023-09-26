import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './detailSlider.scss';

const DetailSlider = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div
            id="custCarousel"
            className="carousel slide text-center"
            data-bs-ride="carousel"
          >
            {/* slides */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://i.imgur.com/weXVL8M.jpg" alt="Hills" />
              </div>
              <div className="carousel-item">
                <img src="https://i.imgur.com/Rpxx6wU.jpg" alt="Hills" />
              </div>
              <div className="carousel-item">
                <img src="https://i.imgur.com/83fandJ.jpg" alt="Hills" />
              </div>
              <div className="carousel-item">
                <img src="https://i.imgur.com/JiQ9Ppv.jpg" alt="Hills" />
              </div>
            </div>
            {/* Left right */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#custCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#custCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
            </button>
            {/* Thumbnails */}
            <ol className="carousel-indicators list-inline">
              <li
                className="list-inline-item active"
                data-bs-target="#custCarousel"
                data-bs-slide-to="0"
              >
                <img
                  src="https://i.imgur.com/weXVL8M.jpg"
                  className="img-fluid"
                  alt="Thumbnail 1"
                />
              </li>
              <li
                className="list-inline-item"
                data-bs-target="#custCarousel"
                data-bs-slide-to="1"
              >
                <img
                  src="https://i.imgur.com/Rpxx6wU.jpg"
                  className="img-fluid"
                  alt="Thumbnail 2"
                />
              </li>
              <li
                className="list-inline-item"
                data-bs-target="#custCarousel"
                data-bs-slide-to="2"
              >
                <img
                  src="https://i.imgur.com/83fandJ.jpg"
                  className="img-fluid"
                  alt="Thumbnail 3"
                />
              </li>
              <li
                className="list-inline-item"
                data-bs-target="#custCarousel"
                data-bs-slide-to="3"
              >
                <img
                  src="https://i.imgur.com/JiQ9Ppv.jpg"
                  className="img-fluid"
                  alt="Thumbnail 4"
                />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSlider;
