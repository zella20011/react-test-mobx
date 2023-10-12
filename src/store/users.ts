import {makeAutoObservable} from 'mobx'

import { userList } from './userList';
import { UserType } from '../type';

class Users {
  usersList = userList;

  constructor() {
    makeAutoObservable(this)
  }

  removeUser(id: number) {
    this.usersList = this.usersList.filter(user => user.id !== id)
  }

  addUser(user: UserType) {
    this.usersList.push(user)
  }
}

export default new Users();