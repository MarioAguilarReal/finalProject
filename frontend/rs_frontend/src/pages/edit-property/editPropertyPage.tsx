import { useParams } from "react-router-dom";
import PropertiesForm from "../../components/propertiesForm/propertiesForm";
import { useEffect, useState } from "react";
import ProperiesService from "../../services/properies.service";
import { Property } from "../../models/Property.model";
import ImageUpload from "../../components/propertiesForm/propertiesImages";

const EditPropertyPage = () => {
	const initialProperty = {
    title: '',
    description: '',
    location: '',
    state: '',
    zip: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    city: '',
    sqft: 0,
    status: ''
  }
  const { id } = useParams();
  const [property, setProperty] = useState(initialProperty as Property);
  const [propertyList, setPropertyList] = useState([] as Property[]);
	const [showInforProp, setShowInforProp] = useState(true as boolean);
	const [showInforImg, setShowInforImg] = useState(false as boolean);
	const [propertyRef, setPropertyRef] = useState('' as string);

  const loadData = async (propID: string) => {
    const response = await ProperiesService.getAllProperties();
    setPropertyList(response?.data);

		const resp = await ProperiesService.getProperty(propID);
		setProperty(resp?.data);
  };

  const handleChange = (
		e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | HTMLInputElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "title") {
			propertyList.forEach((property) => {
				if (property.title === value) {
					alert("Property already exists");
        }
      });
    }
    setProperty({
      ...property,
      [name]: value,
    });
  };

	const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
    if (validateForm()) {
      const resp = await ProperiesService.updateProperty(property);
      if (resp) {
        alert('Property updated successfully');
        setPropertyRef(resp.data);
        setShowInforProp(false);
        setShowInforImg(true);
      }
      else{
        alert('Error creating property');
      }
    }
	};


  const validateForm = () => {
    //check if all fields are filled
    let isValid = true;
    //check if all fields are valid
    for (let key in property) {
      if (
        property[key as keyof Property] === "" ||
        property[key as keyof Property] === 0
      ) {
        isValid = false;
        console.log(key, isValid);
      }
    }
    return isValid;
  };

  useEffect(() => {
    if (id) loadData(id);
  }, [id]);

  return (
    <div>
      <h1 className="title">Edit Property</h1>
      <p className="subtitle">Fill all field to go to next step</p>
			<div hidden={!showInforProp}>
      <PropertiesForm
        property={property}
        handleEdit={handleEdit}
        handleChange={handleChange}
      />
			</div>
			<div hidden={!showInforImg}>
				<ImageUpload
					propertyRef={propertyRef}
					serveImages={property.images}
				/>
			</div>
    </div>
  );
};

export default EditPropertyPage;
