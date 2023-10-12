import React, { useEffect, useState } from 'react'
import './propertyList.scss'
import properiesService from '../../services/properies.service';
import PropertyCard from '../propertyCard/propertyCard';

interface PropertyListProps {
    showFilters?: boolean 
    properties?: any[]
}

interface Filters {
    priceMin: number;
    priceMax: number;
    sqftMin: number;
    sqftMax: number;
    bedrooms: number;
    bathrooms: number;
}

function PropertyList(params: PropertyListProps) {

    const [properties, setProperties] = useState([] as any[]);
    const [propertiesFiltered, setPropertiesFiltered] = useState([] as any[]);
    const [showFilters, setShowFilters] = useState(false);
    const filtersDefault = {
        priceMin: 1,
        priceMax: Infinity,
        sqftMin: 1,
        sqftMax: Infinity,
        bedrooms: 1,
        bathrooms: 1,
    } as Filters;
    const [filters, setFilters] = useState(filtersDefault);

    const getProperties = async () => {
        if (params.properties) {
            setProperties(params.properties);
            setPropertiesFiltered(params.properties);
            return;
        }

        try {
            const response = await properiesService.getAllProperties();
            if (response?.data) {
                console.log(response);
                setProperties(response.data);
                setPropertiesFiltered(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
        let filtersCopy = { ...filters } as Filters;
        const { name, value } = e.target;
        let valueInt = parseInt(value);

        if (value === undefined || value === null || value === "" || isNaN(valueInt) || valueInt <= 0) {
            filtersCopy[name as keyof Filters] = filtersDefault[name as keyof Filters];
        } else {
            filtersCopy[name as keyof Filters] = valueInt;
        }
        setFilters({
            ...filtersCopy,
        } as Filters);
    };
    
    useEffect(() => {
        if (!showFilters) {
            setFilters(filtersDefault);
            return;
        }
        
        let propertiesCopy = properties?.filter((property) => {

            let conditions = [
                parseInt(property.price) >= filters.priceMin && parseInt(property.price) <= filters.priceMax,
                parseInt(property.sqft) >= filters.sqftMin && parseInt(property.sqft) <= filters.sqftMax,
                parseInt(property.bedrooms) >= filters.bedrooms,
                parseInt(property.bathrooms) >= filters.bathrooms,
            ] as boolean[];
            if (!conditions.includes(false)) {
                // If conditions have only true elements, return the property
                return property;
            }
        });
        
        setPropertiesFiltered(propertiesCopy);
    }, [filters, showFilters]);
    
    useEffect(() => {
        getProperties();
        setShowFilters(params.showFilters || false);
    }, []);

    return (
        <main>
            <div className="properties">
                {showFilters ? (<section className="filter-content">
                    <div className="filter">
                        <label htmlFor="price">Price</label>
                        <div className="filter-input">
                            <input onChangeCapture={handleFilters} type="number" id="price" name="priceMin" />
                            <input onChangeCapture={handleFilters} type="number" id="price" name="priceMax" />
                        </div>
                    </div>
                    <div className="filter">
                        <label htmlFor="sqft">sqft</label>
                        <div className="filter-input">
                            <input onChangeCapture={handleFilters} type="number" id="sqft" name="sqftMin" />
                            <input onChangeCapture={handleFilters} type="number" id="sqft" name="sqftMax" />
                        </div>
                    </div>
                    <div className="filter filter-range">
                        <label htmlFor="bedrooms" className="form-label">Bedrooms {filters.bedrooms}</label>
                        <input type="range" onChange={handleFilters} className="form-range" min="1" max="5" defaultValue={1} id="bedrooms" name="bedrooms"></input>
                    </div>
                    <div className="filter filter-range">
                        <label htmlFor="bathrooms" className="form-label">Bathrooms {filters.bathrooms}</label>
                        <input type="range" onChange={handleFilters} className="form-range" min="1" max="5" defaultValue={1} id="bathrooms" name="bathrooms"></input>
                    </div>

                </section>) : null}
                <section className="properties-content">
                    {propertiesFiltered.map((property) => <PropertyCard property={property} />)}
                </section>
            </div>
        </main>
    );
}

export default PropertyList;