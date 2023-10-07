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

  async createProperty(property: Property) {
    try {
        const response = await http.post('/properties/', property);
        return response;
    } catch (error) {
        console.error(error);
    }
  }

  async updateProperty(property: Property) {
    try {
        const response = await http.patch(`/properties/${property.id}/`, property);
        return response;
    } catch (error) {
        console.error(error);
    }
  }

  async createImages(formData: FormData) {
    try {
      // console.log(formData);
        const response = await http.post('/images/', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
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
