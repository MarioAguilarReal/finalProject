import React, { useState, useEffect } from 'react';
import './detail.scss';
import { useParams } from 'react-router-dom';
import DetailSlider from '../../components/detailSlider/detailSlider';
import axios from 'axios';
import { Property } from '../../models/Property.model';


const DetailView = () => {
  const { id } = useParams();

  const [propertyDetails, setProperty] = useState<Property>();

  useEffect(() => {

    axios.get(`/api/properties/${id}/`)
      .then(response => {
        console.log('Property Test and log:', response.data);
        let data = response.data;
        data.images = [{ image: "https://i.imgur.com/weXVL8M.jpg" }, {image: "https://i.imgur.com/Rpxx6wU.jpg"}, {image: "https://i.imgur.com/83fandJ.jpg"}]
        setProperty(data); //response.data
      })
      .catch(error => {
        console.error('Error fetching property details:', error);
      });
  }, [id]);

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

        <a href="#!" className=" text-decoration-none d-block mb-2">
          Back
        </a>
        <button type="submit" className='btn btn-primary contact-button'> Contact Agent <i className="fa-regular fa-envelope"></i> </button>




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
