import './home.scss';
import React, { useEffect } from 'react';
import Slider from '../../components/slider/slider';
import PropertyList from '../../components/propertyList/propertyList';
import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom';
import PropertyCard from '../../components/propertyCard/propertyCard';
import ProperiesService from '../../services/properies.service';

const Home = () => {
  let navigate = useNavigate();

  const handleFilterButton = () => {
    navigate('/property/list');
  }

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
                <button className="btn btn-secondary search-button" type="button">
                  <i className="fa fa-search" />
                </button>
              </div>

              <button type="submit" className='search-filter' onClick={handleFilterButton}> Filter <i className="fa-solid fa-filter"></i> </button>
            </div>
          </div>
          <h1 className='slider-title'>REAL ESTATE AGENCY</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate delectus similique ullam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, ea </p>
        </div>
      </div>


      <div className="main">
        <PropertyList />
      </div>


    </div>

  );
}

export default Home;
