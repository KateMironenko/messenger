import HTTP from "./http";
import { BaseAPI } from "./base-api";

const authAPIInstance = new HTTP(
  "https://ya-praktikum.tech/api/v2/auth/logout"
);

class LogoutAPI extends BaseAPI {
  async request() {
    return authAPIInstance.post("/");
  }
}

export default LogoutAPI;
