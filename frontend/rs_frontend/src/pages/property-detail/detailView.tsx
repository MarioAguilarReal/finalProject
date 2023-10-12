import React, { useState, useEffect } from 'react';
import './detail.scss';
import { useParams, useNavigate, Link } from 'react-router-dom';
import DetailSlider from '../../components/detailSlider/detailSlider';
import axios from 'axios';
import { Property } from '../../models/Property.model';
import properiesService from '../../services/properies.service';
import ModalComponent from '../../components/modal/modal';

const DetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [propertyDetails, setProperty] = useState<Property>();

  useEffect(() => {
    loadData();
  }, [id]);

  async function loadData() {
    if (!id) return;
    let response = await properiesService.getProperty(id);
    setProperty(response?.data);

  }

  const handleGoBack = () => {
    navigate(-1); // Use the history object to go back to the previous page.
  };

  if (!propertyDetails) {

    return <div>Loading...</div>;
  }
  return (
    <div className='container-detail'>
      <div className='container-search'>
        <input type="text" className="form-control-custom" placeholder="Search" />
        <div className="input-group-append">
          <button className="btn btn-secondary" type="button">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
      <div className='container-detail-links'>

        <a href="#!" className=" text-decoration-none d-block mb-2" onClick={handleGoBack}>
          <i className="fa-solid fa-chevron-left"></i>Back
        </a>
        <ModalComponent />
        {/* <button type="submit" className='btn btn-primary contact-button'> Contact Agent <i className="fa-regular fa-envelope"></i> </button> */}




      </div>
      <div className='container-detail-slider'>

        <DetailSlider images={propertyDetails?.images} />


        <div className="card" style={{ width: "100%" }}>

          <div className="card-body">

            <h4 className="card-title">Price: {propertyDetails?.price}</h4>
            <div className="amenities">
              <i className="fa-solid fa-bath" /> {propertyDetails?.bathrooms} baths |{' '}
              <i className="fa-solid fa-bed" /> {propertyDetails?.bedrooms} beds |{' '}
              <i className="fa-solid fa-ruler" /> {propertyDetails?.sqft} sqft
            </div>



            <h4>Description:</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore perspiciatis, commodi rem pariatur ut porro non animi! Voluptate, repellendus.</p>

            <h4>Amenities:</h4>
            <ul>
              {propertyDetails?.amenities?.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
            <p className="card-text">Address: {propertyDetails.location}</p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailView;
