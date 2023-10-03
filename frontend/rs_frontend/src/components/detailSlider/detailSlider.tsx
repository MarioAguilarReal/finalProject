import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './detailSlider.scss';
import { Image } from '../../models/Images.model';

const DetailSlider = ({ images }: any) => {
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
              {images.map((x: Image, index: number) => <div className={"carousel-item " + (index == 0 ? "active" : "")}>
                <img src={x.image} alt="Hills" />
              </div>)}

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
              {images.map((x: Image, index: number) => <li
                className="list-inline-item active"
                data-bs-target="#custCarousel"
                data-bs-slide-to={index}
              >
                <img
                  src={x.image}
                  className="img-fluid"
                  alt="Thumbnail 1"
                />
              </li>)}

            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSlider;
