import PropertiesForm from "../../components/propertiesForm/propertiesForm";
import react, {useEffect, useState} from "react";
import {Property} from "../../models/Property.model";
import {useNavigate} from "react-router-dom";
import ImageUpload from "../../components/propertiesForm/propertiesImages";
import ProperiesService from "../../services/properies.service";

import './newPropertyPage.scss';

const NewPropertyPage = () => {
  const navigateTo = useNavigate();
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
  const [property, setProperty] = useState(initialProperty as Property);

  const [showInforProp, setShowInforProp] = useState(true as boolean);
  const [showInforImg, setShowInforImg] = useState(false as boolean);

  const [propertyRef, setPropertyRef] = useState('' as string);
  const [propertyList, setPropertyList] = useState([] as Property[]);


  const loadData = async () => {
    const response = await ProperiesService.getAllProperties();
    if(response?.data){
      setPropertyList(response.data);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
    const {name, value} = e.target;
    if(name === 'title'){
      propertyList.forEach(property => {
        if(property.title === value){
          alert('Property already exists');
        }
      });
    }
    setProperty({
      ...property,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const resp = await ProperiesService.createProperty(property);
      if (resp) {
        alert('Property created successfully');
        setPropertyRef(resp.data);
        setProperty(initialProperty as Property);
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
      if (property[key as keyof Property] === '' || property[key as keyof Property] === 0) {
        isValid = false;
        console.log(key, isValid);
      }
    }
    return isValid;

  }

  useEffect(() => {
    loadData();
  },[]);

  return (
    <div className="new-property-page">
      <h1 className='title'>New Property</h1>
      <p className='subtitle'>Fill all field to go to next step</p>
      <div hidden={!showInforProp}>
        <PropertiesForm
          property={property}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          validateForm={validateForm}
        />
      </div>
      <div hidden={!showInforImg}>
        <ImageUpload
          propertyRef={propertyRef}
        />
      </div>
    </div>
  );
}

export default NewPropertyPage;
