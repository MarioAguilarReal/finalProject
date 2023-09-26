import { User } from './User.model';
export interface Property {
    id: number;
    name: string;
    description?: string;
    beds?: number;
    baths?: number;
    address?: string;
    city: string;
    state: string;
    zip: string;
    price?: number;
    images: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    }