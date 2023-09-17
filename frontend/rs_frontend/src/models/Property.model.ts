import { User } from './User.model';
export interface Property {
    id: number;
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    price: number;
    image: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    }