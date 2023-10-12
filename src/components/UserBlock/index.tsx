import { FC, useState } from "react";

// types
import { UserType } from "../../type";

//store
import Users from '../../store/users';

// import styled from "styled-components"

// const Wrapper = styled.div``;

const UserBlock: FC<{data: UserType}> = ({data}) => {
  const [newName, setNewName] = useState<string>(data.name)
  const [isBlocked, setIsBlocked] = useState<boolean>(false)

  const handlerDeleteUser = () => {
    if (isBlocked) return alert(`User ${data.name} is Blocked`)

    Users.removeUser(data.id)
  }

  return (
    <div>
      <div>Name: {newName}</div>
      <input type="text" onChange={({target: {value}}) => setNewName(value)} />
      <label htmlFor="isBlock">Is Blocked</label>
      <input type="checkbox" name="isBlock" id="isBlock" onChange={() => setIsBlocked((prev) => !prev)} />
      <button onClick={handlerDeleteUser}>Delete User</button>
    </div>
  );
}

export default UserBlock;