import Router from "../router/router";
import SignUpAPI from "../api/signup-api";

interface SignUpFormModel {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

const router = new Router("#root");
const signupApi = new SignUpAPI();

class UserSignUpController {
  public async login(data: SignUpFormModel) {
    try {
      signupApi.request(data).then(() => router.go("/messenger"));
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserSignUpController;
