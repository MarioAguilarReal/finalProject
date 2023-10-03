import { Property } from './Property.model';
export interface Image {
    id?: number;
    image: string;
<<<<<<< HEAD
    property?: number;
=======
    propertyId?: Property;
>>>>>>> master
    createdAt?: Date;
    updatedAt?: Date;
};