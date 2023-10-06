import './propertiesForm.scss'
import React, { useEffect } from 'react';
import { Property } from '../../models/Property.model';
import { useNavigate } from 'react-router-dom';
const PropertiesForm = (props:any) => {
    const {property, handleChange, handleSubmit, validateForm } = props;
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

    return (
        <div className='property-form'>
            <form action="" method="post" className='form' onSubmit={handleSubmit}>
                <div className="form-item">
                    <input
                        className='form-control'
                        type="text"
                        id='title'
                        name='title'
                        placeholder='Title'
                        onChange={handleChange}
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
                    />
                </div>
                <div className="form-item">
                    <select
                    className='form-control'
                    id='status'
                    name='status'
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
