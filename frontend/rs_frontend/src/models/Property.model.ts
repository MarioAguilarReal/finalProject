import { User } from './User.model';
import { Image } from './Images.model';
export interface Property {
    id: number;
    title: string;
    description: string;
    location: string;
    city?: string;
    state: string;
    zip: string;
    price: number;
    images: Image[];
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}