import { Property } from './Property.model';
export interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
    password2: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    profile_picture?: any;

    properties?: Property[];
}