import './home.scss';
import React from 'react';
import Slider from '../../components/slider/slider';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className='home-bg'>
        <div className='header'>
          <Slider />
          <div className="slider-container">
            <div className="input-group">
              <div className="input-group-prepend">
                <button className="btn btn-secondary" type="button">
                  <i className="fa-solid fa-map-marker"></i>
                </button>
              </div>
              <input type="text" className="form-control-custom" placeholder="Search" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button">
                  <i className="fa fa-search" />
                </button>
              </div>

              <button type="submit" className='search-filter'> Filter <i className="fa-solid fa-filter"></i> </button>
            </div>
          </div>
          <h1 className='slider-title'>REAL ESTATE AGENCY</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate delectus similique ullam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ea </p>
        </div>

      </div>
      <div className="main">
        
      </div>
    </div>

  );
}

export default Home;
