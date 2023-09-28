import React from 'react';
import './detail.scss';
import { useParams } from 'react-router-dom';
import DetailSlider from '../../components/detailSlider/detailSlider';

const DetailView = () => {
  const { id } = useParams();

  // just test data to figure out the format first
  const propertyDetails = {
    imageSrc: 'path/to/property-image.jpg',
    price: '$500,000',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2000,
    amenities: ['Swimming Pool', 'Garden', 'Garage'],
    address: '123 Main St, City, State',
  };

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

<DetailSlider />


<div className="card" style={{ width: "100%" }}>
  
        <div className="card-body">
          <h4 className="card-title">Price: {propertyDetails.price}</h4>
          <div className="amenities">
            <i className="fa-solid fa-bath" /> {propertyDetails.bathrooms} baths |{' '}
            <i className="fa-solid fa-bed" /> {propertyDetails.bedrooms} beds |{' '}
            <i className="fa-solid fa-ruler" /> {propertyDetails.sqft} sqft
          </div>



          <h4>Description:</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore perspiciatis, commodi rem pariatur ut porro non animi! Voluptate, repellendus.</p>
          
          <h4>Amenities:</h4>
          <ul>
            {propertyDetails.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          <p className="card-text">Address: {propertyDetails.address}</p>

        </div>
      </div>

</div>
</div>
  );
};

export default DetailView;
