import { useEffect, useState } from "react"
import { Property } from "../../models/Property.model";
import "./propertyCard.scss"
import { Link } from 'react-router-dom';

const PropertyCard = (params: any) => {

    const [property, setProperty] = useState({} as Property);

    const handleClck = () => {
        console.log("clicked")
    };

    useEffect(() => {
        let propertyCopy = {} as Property;

        propertyCopy.id = params.property.id
        propertyCopy.title = params.property.title
        propertyCopy.description = params.property.description
        propertyCopy.price = params.property.price
        propertyCopy.sqft = params.property.sqft
        propertyCopy.bedrooms = params.property.bedrooms
        propertyCopy.bathrooms = params.property.bathrooms
        propertyCopy.location = params.property.location
        propertyCopy.images = params.property.images
        propertyCopy.status = "for sale"

        setProperty(propertyCopy);

    }, [params.property]);

    return (
        <Link to={`/property/${property.id}`} >
        <div className="propertyCard" onClick={handleClck}>

            <div className="property-image">
                <img src={property?.images?.length > 0 ? property.images[0].image : ""} alt="" />
            </div>


            <div className="property-info">
                <div>
                    <div className="property-price">
                        <h2>{property.price} $</h2>
                    </div>

                    <div className="property-quickinfo">
                        <div className="quick-info">
                            <div className="quick-icon">
                                <i className="fa-solid fa-bed"></i>
                            </div>
                            <p>{property.bedrooms} beds</p>
                        </div>

                        <div className="quick-info">
                            <div className="quick-icon">
                                <i className="fa-solid fa-bath"></i>
                            </div>
                            <p>{property.bathrooms} baths</p>
                        </div>

                        <div className="quick-info">
                            <div className="quick-icon">
                                <i className="fa-solid fa-ruler"></i>
                            </div>
                            <p>{property.sqft} sqft</p>
                        </div>
                    </div>

                    <div className="property-address">
                        <div className="address-icon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <p>{property.location}</p>
                    </div>
                </div>
                <div className="property-status">
                    <div className="status-icon">
                        <i className="fa-solid fa-circle"></i>
                    </div>
                    <div className="status">
                        <p>{property.status}</p>
                    </div>
                </div>
            </div>

        </div>
        </Link>
    );
};

export default PropertyCard;