import UsersAPI from "../api/users-api";

interface UsersFormModel {
  login: string;
}

const usersApi = new UsersAPI();

class UserLoginController {
  public async findUser(data: UsersFormModel) {
    try {
      return await usersApi.create(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserLoginController();
