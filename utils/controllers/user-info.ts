import UserInfoAPI from "../api/user-api";
import UserAvatarAPI from "../api/user-avatar-api";
import UserPasswordAPI from "../api/user-password-api";
import store from "../store/store";

interface UserFormModel {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

interface UserPasswordModel {
  oldPassword: string;
  newPassword: string;
}
const userApi = new UserInfoAPI();
const userAvatarAPI = new UserAvatarAPI()
const userPasswordAPI = new UserPasswordAPI()

class UserController {
  public async getUser() {
    try {
     return userApi.request().then((data) => {
        window.userID = data.id
        store.set("user", data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  public async updateUser(data: UserFormModel) {
    try {
      userApi.update(data).then((data) => {
        store.set("user", data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  public async updateAvatar(data: FormData) {
    try {
      userAvatarAPI.update(data).then((data) => {
        store.set("user", data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  public async updatePassword(data: UserPasswordModel) {
    try {
      userPasswordAPI.update(data)
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
