import http from "./http-common";
import { User } from "../models/User.model";

class UserService {
    async getUsers() {
        try {
            const response = await http.get("/users/");
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getUser(id: number) {
        try {
            const response = await http.get(`/users/${id}`);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async createUser(user: User) {
        try {
            const response = await http.post("/users/", user, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response;
        } catch (error) {
            // console.log(error);
        }
    }

    async updateUser(user: User) {
        try {
            const response = await http.put(`/users/${user.id}`, user);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async login(user: any) {
        try{
            const response = await http.post("/login/", user);
            console.log(response.data);
            return response;
        }
        catch(error){
            return false;
        }
    }
}

export default new UserService();