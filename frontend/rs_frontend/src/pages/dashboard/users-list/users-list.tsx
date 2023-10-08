import { useEffect, useState } from "react";
import usersService from "../../../services/users.service";
import { User } from "../../../models/User.model";
import UserComponent from "./userComponent/userComponent";

const UsersList = () => {

    const [usersList, setUsersList] = useState([] as User[]);

    const loadData= async()=>{
        const resp = await usersService.getUsers();
        console.log(resp?.data);
        setUsersList(resp?.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return(
        <div>
            <h1>Users List</h1>
            {usersList.map((user:User) => (
                <UserComponent user={user} key={user.id}/>
            ))}
        </div>
    );
}
export default UsersList;
