import './propertiesForm.scss'
import React, { useEffect, useState } from 'react';
import { Property } from '../../models/Property.model';
import { useNavigate } from 'react-router-dom';


const PropertiesForm = (props:any) => {
    const {property, handleChange, handleSubmit, validateForm, handleEdit} = props;
    const navigateTo = useNavigate();
    const [propertyForm, setPropertyForm] = useState<Property>();
    const [editing, setEditing] = useState(false);
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
    } as Property;

    useEffect(() => {
        if(property){
            setPropertyForm(property);
            setEditing(true);
        }else{
            setPropertyForm(initialProperty);
        }
    }, [property])

    return (
        <div className='property-form'>
            <form action="" method="post" className='form' onSubmit={editing ? handleEdit : handleSubmit}>
                <div className="form-item">
                    <input
                        className='form-control'
                        type="text"
                        id='title'
                        name='title'
                        placeholder='Title'
                        onChange={handleChange}
                        value={propertyForm?.title}
                    />
                </div>
                <div className="form-item">
                    <input
                        className='form-control'
                        type="text"
                        id='description'
                        name='description'
                        placeholder='Description'
                        onChange={handleChange}
                        value={propertyForm?.description}
                    />
                </div>
                <div className="form-item">
                    <input
                        className='form-control'
                        type="number"
                        id='price'
                        name='price'
                        placeholder='Price'
                        onChange={handleChange}
                        value={propertyForm?.price}
                    />
                </div>
                <div className="form-item">
                    <input
                        className='form-control'
                        type="number"
                        id='bedrooms'
                        name='bedrooms'
                        placeholder='Bedrooms'
                        onChange={handleChange}
                        value={propertyForm?.bedrooms}
                    />
                </div>
                <div className="form-item">
                    <input
                        className='form-control'
                        type="number"
                        id='bathrooms'
                        name='bathrooms'
                        placeholder='Bathrooms'
                        onChange={handleChange}
                        value={propertyForm?.bathrooms}
                    />
                </div>
                <div className='form-item'>
                    <input
                        className='form-control'
                        type="text"
                        id='location'
                        name='location'
                        placeholder='Location'
                        onChange={handleChange}
                        value={propertyForm?.location}
                    />
                </div>
                <div className="form-item">
                    <input
                        className='form-control'
                        type="number"
                        id='sqft'
                        name='sqft'
                        placeholder='Sqft'
                        onChange={handleChange}
                        value={propertyForm?.sqft}
                    />
                </div>
                <div className="form-item">
                    <input
                        className='form-control'
                        type="text"
                        id='city'
                        name='city'
                        placeholder='City'
                        onChange={handleChange}
                        value={propertyForm?.city}
                    />
                </div>
                <div className="form-item">
                    <input
                        className='form-control'
                        type="text"
                        id='state'
                        name='state'
                        placeholder='State'
                        onChange={handleChange}
                        value={propertyForm?.state}
                    />
                </div>
                <div className="form-item">
                    <input
                    className='form-control'
                    type="text"
                    id='zip'
                    name='zip'
                    placeholder='Zip-Code'
                    onChange={handleChange}
                    value={propertyForm?.zip}
                    />
                </div>
                <div className="form-item">
                    <select
                    className='form-control'
                    id='status'
                    name='status'
                    value={propertyForm?.status}
                    onChange={handleChange}
                    >
                        <option value="">Status</option>
                        <option value="forsale">For Sale</option>
                        <option value="forrent">For Rent</option>
                    </select>
                </div>
                <div className="form-item">
                    <button className='btn btn-primary' type="submit">Next</button>
                </div>
            </form>
        </div>
    );
}

export default PropertiesForm;
