import { useNavigate } from "react-router-dom";
import { Property } from "../../../../models/Property.model";

const ListPropertyComponent = (property:Property) =>{
  const NavigateTo = useNavigate();
  const editProperty = () =>{
    NavigateTo(`/admin/edit/${property.id}`)
  }
  return (
    <div className="property-item">
      <div className="image-section">
        <img src={property?.images?.length > 0 ? property.images[0].image : ""} alt="" />
      </div>
      <div className="information-section">
          <p className="title">{property.title}</p>
          <p className="price">${property.price}</p>
          <p className="description">{property.description}</p>
      </div>
      <div className="information-section-p2">
          <p className="address">{property.location}, {property.zip}, {property.city}, {property.state}</p>
          <p className="bedrooms">{property.bedrooms} Bedrooms</p>
          <p className="bathrooms">{property.bathrooms} Bathrooms</p>
      </div>
      <div className="actions-section">
        <button className="edit-button btn btn-success" onClick={editProperty}>Edit</button>
        <button className="delete-button btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default ListPropertyComponent;
