import HTTP from './http';
import {BaseAPI} from './base-api';

const userInfoAPIInstance = new HTTP(
  'https://ya-praktikum.tech/api/v2/user/profile/avatar'
);

class UserAvatarAPI extends BaseAPI {
  async update(data: FormData) {
    return userInfoAPIInstance
      .put('', {
        headers: {
          credentials: 'include', // Нам нужно подставлять cookies
          mode: 'cors'
        },
        data
      })
      .then((response: any) => JSON.parse(response.responseText));
  }
}

export default UserAvatarAPI;
