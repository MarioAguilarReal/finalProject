import { useEffect, useState } from "react";
import usersService from "../../../services/users.service";
import { User } from "../../../models/User.model";
import UserComponent from "./userComponent/userComponent";
import { Link } from "react-router-dom";

import "./users-list.scss";

const UsersList = () => {
  const [usersList, setUsersList] = useState([] as User[]);

  const loadData = async () => {
    const resp = await usersService.getUsers();
    console.log(resp?.data);
    setUsersList(resp?.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="users-list">
      <div className="top">
        <h1 className="title">Users List</h1>
        <Link to="/admin/new-user" className="btn btn-primary">New User</Link>
      </div>
      <div className="list">
        {usersList.map((user: User) => (
          <UserComponent user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};
export default UsersList;
