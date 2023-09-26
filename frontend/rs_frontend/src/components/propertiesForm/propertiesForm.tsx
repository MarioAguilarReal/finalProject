import './propertiesForm.scss'
import React from 'react';
import { Property } from '../../models/Property.model';

const PropertiesForm = () => {
    return (
        <div className='property-form'>
            <form action="" method="post">
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' />
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" id='description' name='description' />
                </div>
                <div className="form-control">
                    <label htmlFor="price">Price</label>
                    <input type="number" id='price' name='price' />
                </div>
                <div className="form-control">
                    <label htmlFor="bedrooms">Bedrooms</label>
                    <input type="number" id='bedrooms' name='bedrooms' />
                </div>
                <div className="form-control">
                    <label htmlFor="bathrooms">Bathrooms</label>
                    <input type="number" id='bathrooms' name='bathrooms' />
                </div>
                <div className='form-control'>
                    <label htmlFor="address">Address</label>
                    <input type="text" id='address' name='address' />
                </div>
                <div className="form-control">
                    <label htmlFor="city">City</label>
                    <input type="text" id='city' name='city' />
                </div>
                <div className="form-control">
                    <label htmlFor="state">State</label>
                    <input type="text" id='state' name='state' />  
                </div>
                <div className="form-control">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" id='zip' name='zip' />
                </div>
            </form>
        </div>
    );
}

export default PropertiesForm;
