import { User } from './User.model';
export interface Property {
    id: number;
    title: string;
    description: string;
    location: string;
    city?: string;
    state: string;
    zip: string;
    price: number;
    address?: string;
    // image: {} as Images;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    // userId: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    // user: User;
}