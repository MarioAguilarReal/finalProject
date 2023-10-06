import {useEffect, useState} from 'react';
import ProperiesService from '../../../services/properies.service';
import { Property } from '../../../models/Property.model';
import ListPropertyComponent from './listComponent/listComponent';
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
        <div>
            <h1>Properties List</h1>
            <div className='properties'>
                {PropertiesList.map((property:Property) => (
                    <ListPropertyComponent {...property} key={property.id}/>
                ))}
            </div>
        </div>
    );
}

export default PropertiesList;
