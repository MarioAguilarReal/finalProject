import { useNavigate } from "react-router-dom";
import { Property } from "../../../../models/Property.model";

const ListPropertyComponent = (property:Property) =>{
  const NavigateTo = useNavigate();
  const editProperty = () =>{
    NavigateTo(`/admin/edit`)
  }
  return (
    <div>
      <div className="image-section">
        <img src={property?.images?.length > 0 ? property.images[0].image : ""} alt="" />
      </div>
      <div className="information-section">
          <h1>{property.title}</h1>
          <h2>${property.price}</h2>
      </div>
      <div className="interaction-section">
        <button className="edit-button" onClick={editProperty}>Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
}

export default ListPropertyComponent;
