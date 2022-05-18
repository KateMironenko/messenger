import HTTP from './http';
import {BaseAPI} from './base-api';

const userInfoAPIInstance = new HTTP('https://ya-praktikum.tech/api/v2/user/');
interface UsersFormModel {
  login: string;
}

class UsersAPI extends BaseAPI {
  async create(user: UsersFormModel) {
    return userInfoAPIInstance
      .post('search', {data: JSON.stringify(user)})
      .then((response: any) => JSON.parse(response.responseText));
  }
}

export default UsersAPI;
