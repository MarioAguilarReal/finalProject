import './home.css';
import React from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-bg'>
      <div id="intro" className="bg-image shadow-1-strong">
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="container d-flex align-items-center justify-content-center text-center h-50">
            <div className="text-white">
              <h1 className="mb-3">Sample Text</h1>
              <h5 className="mb-4">Sample Text</h5>



              <div className="input-group">
  <input type="text" className="form-control" placeholder="Search" />
  <div className="input-group-append">
    <button className="btn btn-secondary" type="button">
      <i className="fa fa-search" />
    </button>
  </div>

  <button type="submit" className='search-filter'> Filter <i className="fa-solid fa-filter"></i> </button>


</div>





</div>
            </div>
          </div>
        </div>

      </div>

  );
}

export default Home;
