import { Property } from './Property.model';
export interface Image {
    id?: number;
    imageFile: string;
    propertyId?: Property;
    createdAt?: Date;
    updatedAt?: Date;
};