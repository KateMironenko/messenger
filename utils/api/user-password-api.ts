import HTTP from "./http";
import { BaseAPI } from "./base-api";

const userInfoAPIInstance = new HTTP(
  "https://ya-praktikum.tech/api/v2/user/password"
);
interface UserFormModel {
  oldPassword: string;
  newPassword: string;
}

class UserPasswordAPI extends BaseAPI {
  async update(data: UserFormModel) {
    return userInfoAPIInstance.put("", { data: JSON.stringify(data) });
  }
}

export default UserPasswordAPI;
