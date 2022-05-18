import Router from '../router/router';
import LogoutAPI from '../api/logout-api';

const router = new Router('#root');
const logoutApi = new LogoutAPI();

class UserLogoutController {
  public async logout() {
    try {
      logoutApi.request().then(() => router.go('/'));
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserLogoutController();
