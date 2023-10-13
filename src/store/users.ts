import { makeAutoObservable } from "mobx";

// store
import { userList } from "./userList";

class Users {
  usersList = userList;

  constructor() {
    makeAutoObservable(this);
  }

  removeUser(id: number) {
    this.usersList = this.usersList.filter((user) => user.id !== id);
  }

  addUser(name: string) {
    const newUser = {
      id: Math.random(),
      name,
    };

    this.usersList.push(newUser);
  }
}

export default new Users();
