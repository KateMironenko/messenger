import HTTP from './http';
import {BaseAPI} from './base-api';

const authAPIInstance = new HTTP(
  'https://ya-praktikum.tech/api/v2/auth/signin'
);

class LoginAPI extends BaseAPI {
  async request(user: { login: string; password: string }) {
    return authAPIInstance
      .post('', {data: JSON.stringify(user)})
      .then(({userId}: any) => userId);
  }
}

export default LoginAPI;
