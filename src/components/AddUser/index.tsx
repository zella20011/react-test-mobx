import { FC, useState } from "react";
import styled from "styled-components";

//store
import Users from "../../store/users";

const Wrapper = styled.div`
  margin-top: 20px;
  border-top: 1px dashed #000;
`;

const AddUser: FC = () => {
  const [newUser, setNewUser] = useState<string>("");

  const handlerAddNewUser = () => {
    if (!newUser) return alert("Enter new user name");

    Users.addUser(newUser);
  };

  return (
    <Wrapper>
      <h2>Add new user</h2>
      <div>
        <div>Enter new user name: </div>
        <input
          type="text"
          onChange={({ target: { value } }) => setNewUser(value)}
        />
        <button onClick={handlerAddNewUser}>Add new user</button>
      </div>
    </Wrapper>
  );
};

export default AddUser;
