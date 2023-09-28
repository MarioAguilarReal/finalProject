import { Property } from './Property.model';
export interface Images {
    id?: number;
    imageFile: string;
    propertyId?: Property;
    createdAt?: Date;
    updatedAt?: Date;
};