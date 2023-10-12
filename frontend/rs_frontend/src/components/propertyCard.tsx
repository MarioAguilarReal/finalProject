import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

<div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Price</h5>
    <i className="fa-solid fa-bath" /> <i className="fa-solid fa-bed" />{" "}
    <i className="fa-solid fa-ruler" />
    <h4>:</h4>
    <h4>Amenities:</h4>
    <p className="card-text">Address goes here</p>
    <Link to="#" className="btn btn-primary">
      See more
    </Link>
  </div>
</div>


        );
    }

    export default Navbar;

