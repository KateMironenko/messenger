import UsersAPI from "../api/users-api";

interface UsersFormModel {
  login: string;
}

const usersApi = new UsersAPI ();

class UserLoginController {
  public async findUser(data: UsersFormModel) {
    try {
      const user = usersApi.create(data)
      return user
    } catch (error) {
        console.log(error)
    }
  }
}

export default new UserLoginController()
