import { Property } from './Property.model';
export interface Image {
    id?: number;
    image: string;
    property?: number;
    createdAt?: Date;
    updatedAt?: Date;
};