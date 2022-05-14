import HTTP from "./http";
import { BaseAPI } from "./base-api";

const userInfoAPIInstance = new HTTP(
  "https://ya-praktikum.tech/api/v2/"
);
interface UserFormModel {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

class UserAPI extends BaseAPI {
  async update(user: UserFormModel) {
    return userInfoAPIInstance.put("user/profile", {data: JSON.stringify(user)}).then((response: any)=>JSON.parse(response.responseText));
  }

  async request() {
    return userInfoAPIInstance.get("auth/user").then((response: any)=>JSON.parse(response.responseText));
  }
}

export default UserAPI
