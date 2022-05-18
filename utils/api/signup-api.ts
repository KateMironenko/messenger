import HTTP from "./http";
import { BaseAPI } from "./base-api";

const authAPIInstance = new HTTP(
  "https://ya-praktikum.tech/api/v2/auth/signup"
);

class SignUpAPI extends BaseAPI {
  async request(user: {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
  }) {
    return authAPIInstance
      .post("/", { data: JSON.stringify(user) })
      .then(({ user_id }: any) => user_id);
  }
}

export default SignUpAPI;
