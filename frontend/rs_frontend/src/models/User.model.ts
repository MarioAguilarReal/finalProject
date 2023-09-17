import { Property } from './Property.model';
export interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
    password2: string;
    firstName?: string;
    lastName?: string;
    phone_number?: string;
    profilePicture?: any;

    properties: Property[];
}