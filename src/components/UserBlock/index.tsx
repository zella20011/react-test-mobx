import { FC, useState } from "react";

// types
import { UserType } from "../../type";

//store
import Users from '../../store/users';

const UserBlock: FC<{data: UserType}> = ({data}) => {
  const [newName, setNewName] = useState<string>(data.name);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const handleChangeName = ({target: {value}}: {target: HTMLInputElement}) => {
    if (isBlocked) return alert(`User ${newName} is Blocked`)

    setNewName(value)
  };

  const handlerDeleteUser = () => {
    if (isBlocked) return alert(`User ${newName} is Blocked`)

    Users.removeUser(data.id)
  };

  return (
    <div>
      <div>Name: {newName}</div>
      <input type="text" value={newName} onChange={handleChangeName} />
      <label htmlFor="isBlock">Is Blocked</label>
      <input type="checkbox" name="isBlock" id="isBlock" onChange={() => setIsBlocked((prev) => !prev)} />
      <button onClick={handlerDeleteUser}>Delete User</button>
    </div>
  );
}

export default UserBlock;