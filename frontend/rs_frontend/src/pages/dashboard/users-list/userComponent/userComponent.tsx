import { User } from "../../../../models/User.model";

const UserComponent = (props: any) => {

  const handleDelete = () =>{
    console.log("delete");
  }

  const handleEdit = () =>{
    console.log("edit");
  }

  return (
    <div className="user-component">
      <div className="profile">
        {props.user.profile_picture? (
            <img src={props.user.profile_picture} alt="avatar" />
          ) : (
            <img src="https://images.pexels.com/photos/11086204/pexels-photo-11086204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />
          )}
      </div>
      <div className="information">
        <p className="username">{props.user.username}</p>
        <p className="email">{props.user.email}</p>
      </div>
      <div className="interaction">
        <button className="btn btn-danger btn-delete" onClick={handleDelete}>Delete</button>
        <button className="btn btn-success btn-edit" onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default UserComponent;
