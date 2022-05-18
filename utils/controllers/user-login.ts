import Router from '../router/router';
import LoginAPI from '../api/login-api';

interface LoginFormModel {
  login: string;
  password: string;
}

const router = new Router('#root');
const loginApi = new LoginAPI();

class UserLoginController {
  public async login(data: LoginFormModel) {
    try {
      loginApi
        .request(data)
        .then(data => {
          window.userID = data;
        })
        .then(() => {
          router.go('/messenger');
        });
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserLoginController;
