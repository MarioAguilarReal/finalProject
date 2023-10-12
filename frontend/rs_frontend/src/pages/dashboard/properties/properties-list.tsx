import {useEffect, useState} from 'react';
import ProperiesService from '../../../services/properies.service';
import { Property } from '../../../models/Property.model';
import ListPropertyComponent from './listComponent/listComponent';

import './properties-list.scss';
import { Link } from 'react-router-dom';

const PropertiesList = () => {

    const [PropertiesList, setPropertiesList] = useState([] as Property[]);

    const loadData = async () =>{
        const response = await ProperiesService.getAllProperties();
        if(response?.data){
            setPropertiesList(response.data);
        }
    }


    useEffect(() => {
        loadData();
    }, []);
    return(
        <div className='properties-list'>
            <div className="top">
                <h1>Properties List</h1>
                <Link to="/admin/dashboard" className="btn btn-primary">New Property</Link>
            </div>
            <div className='properties'>
                {PropertiesList.map((property:Property) => (
                    <ListPropertyComponent {...property} key={property.id}/>
                ))}
            </div>
        </div>
    );
}

export default PropertiesList;
