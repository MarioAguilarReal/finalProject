import { User } from "../../../../models/User.model";

const UserComponent = (props: any) =>{

  return(
    <div>
      <h1>{props.user.username}</h1>
      <p>{props.user.last_name}</p>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default UserComponent;
