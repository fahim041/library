import HttpService from './http-service';

export interface User {
  id: number;
  name: string;
  username: string;
}

const UserService = new HttpService('/users');

export default UserService;
