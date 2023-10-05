import { Property } from '../models/Property.model';
import http from './http-common';

class PropertiesService {

  async getAllProperties() {

    try {
      const response = await http.get('/properties/'); // Uncomment for production
      // const response = testData;
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async getProperty(id: string) {
    try {
      const response = await http.get(`/properties/${id}/`); // Uncomment for production
      // const response = testData;
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new PropertiesService();