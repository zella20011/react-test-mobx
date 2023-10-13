import { FC, useState } from "react";

//store
import Users from "../../store/users";

const AddUser: FC = () => {
  const [newUser, setNewUser] = useState<string>("");

  const handlerAddNewUser = () => {
    if (!newUser) return alert("Enter new user name");

    Users.addUser(newUser);
  };

  return (
    <div>
      <h2>Add new user</h2>
      <div>
        <div>Enter new user name: </div>
        <input
          type="text"
          onChange={({ target: { value } }) => setNewUser(value)}
        />
        <button onClick={handlerAddNewUser}>Add new user</button>
      </div>
    </div>
  );
};

export default AddUser;
