import { FC, useState } from "react";
import styled from "styled-components";

// types
import { UserType } from "../../type";

//store
import Users from "../../store/users";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px;

  & > * {
    padding: 6px;
    border: 1px solid #000;
  }
`;

const UserBlock: FC<{ data: UserType }> = ({ data }) => {
  const [newName, setNewName] = useState<string>(data.name);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const handleChangeName = ({
    target: { value },
  }: {
    target: HTMLInputElement;
  }) => {
    if (isBlocked) return alert(`User ${newName} is Blocked`);

    setNewName(value);
  };

  const handlerDeleteUser = () => {
    if (isBlocked) return alert(`User ${newName} is Blocked`);

    Users.removeUser(data.id);
  };

  return (
    <Wrapper>
      <div>Name: {newName}</div>
      <div>
        <label htmlFor="changeName">Change user name:</label>
        <input id="changeName" type="text" value={newName} onChange={handleChangeName} />
      </div>
      <div>
        <label htmlFor="isBlock">Is Blocked</label>
        <input
          type="checkbox"
          name="isBlock"
          id="isBlock"
          onChange={() => setIsBlocked((prev) => !prev)}
        />
      </div>
      <button onClick={handlerDeleteUser}>Delete User</button>
    </Wrapper>
  );
};

export default UserBlock;
