import { blockTemplate } from "./login.tmpl";
import Block from "../../modules/block/Block";
import Form from "../../components/Form/index";
import "./login.scss";

type LoginProps = {};
class Login extends Block<LoginProps> {
  constructor(props: any) {
    super("div", props);
  }

  render() {
    this.children.form = new Form({
      formClass: "login-form",
      btnName: "Sign in",
      type: "submit",
      name: "sign-in",
      className: "auth-form__btn-submit",
      inputs: [
        {
          inputContainerClass: "auth-form__input",
          inputClass: "auth-form__item",
          inputId: "login-input",
          inputName: "login",
          inputType: "text",
          inputPlaceholder: " ",
          inputLabel: "Login",
          validations: /(?!^\d+$)^[A-Za-z0-9]{3,20}$/,
        },
        {
          inputContainerClass: "auth-form__input",
          inputClass: "auth-form__item",
          inputId: "password-input",
          inputName: "password",
          inputType: "password",
          inputPlaceholder: " ",
          inputLabel: "Password",
          validations: /^(?=.*\d)(?=.*[A-Z]).{8,40}$/,
        },
      ],
    });
    return this.compile(blockTemplate, { form: this.children.form });
  }
}
export const login = new Login({});
