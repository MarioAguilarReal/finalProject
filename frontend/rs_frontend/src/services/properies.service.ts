import { Property } from '../models/Property.model';
import http from './http-common';

class PropertiesService {

  async getAllProperties() {
    
    try {
        const response = await http.get('/properties/'); // Uncomment for production
        // const response = testData;
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
  }
}

export default new PropertiesService();