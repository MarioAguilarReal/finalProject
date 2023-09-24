import { Property } from '../models/Property.model';
import http from './http-common';

class PropertiesService {

  async getAllProperties() {
    const testData = {data: [
        {
            id: 1,
            title: 'Property 1',
            description: 'Description 1',
            location: 'Location 1',
            state: "State 1",
            zip: "11111",
            price: 11111,
            bedrooms: 1,
            bathrooms: 1,
            sqft: 1,
            status: "for sale",
            createdAt: new Date(),
            updatedAt: new Date(),
        } as any,
        {
            id: 2,
            title: 'Property 2',
            description: 'Description 2',
            location: 'Location 2',
            state: "State 2",
            zip: "2",
            price: 2,
            bedrooms: 2,
            bathrooms: 2,
            sqft: 2,
            status: "for sale",
            createdAt: new Date(),
            updatedAt: new Date(),
        } as any,
    ]} as any; // Delete or commment TestData for production
    
    try {
        // const response = await http.get('/properties/'); // Uncomment for production
        const response = testData;
        return response;
    } catch (error) {
        console.error(error);
    }
  }
}

export default new PropertiesService();