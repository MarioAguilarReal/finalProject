import { Property } from './Property.model';
export interface Image {
    id?: number;
    image: string;
    propertyId?: Property;
    createdAt?: Date;
    updatedAt?: Date;
};