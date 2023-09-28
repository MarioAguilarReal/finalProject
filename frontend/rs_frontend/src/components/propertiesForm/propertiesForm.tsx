import './propertiesForm.scss'
import React, { useEffect } from 'react';
import { Property } from '../../models/Property.model';

const PropertiesForm = () => {

    const initialProperty = {
        title: '',
        description: '',
        price: 0,
        bedrooms: 0,
        bathrooms: 0,
        address: '',
        city: '',
        state: '',
        zip: '',
        sqft: 0,
        status: ''
    }

    const [property, setProperty] = React.useState(initialProperty as Property);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setProperty({
            ...property,
            [name]: value
        });
    };

    useEffect(() => {
        console.log('useEffect');
    });

    return (
        <div className='property-form'>
            <h1 className='title'>New Property</h1>
            <p className='subtitle'>Fill all field to go to next step</p>
            <form action="" method="post" className='form'>
                <div className="form-item">
                    <input
                        className='form-control'
                        type="text"
                        id='name'
                        name='name'
                        placeholder='Name'
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
                        id='address'
                        name='address'
                        placeholder='Address'
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
                        <option value="sale">Sale</option>
                        <option value="rent">Rent</option>
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
