import { blockTemplate } from "./createAccount.tmpl";
import Block from "../../modules/block/Block";
import Form from "../../components/Form/index";
import "./createAccount.scss";
import UserSignUpController from "../../../utils/controllers/user-signup";


const userApi = new UserSignUpController();

function onSignUp(data: {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}): void {
  userApi.login(data);
}
class CreateAccount extends Block {
  constructor(props: {}) {
    super("div", props);
  }

  render() {
    this.children.form = new Form({
      formClass: "signup_form",
      btnName: "Sign up",
      type: "submit",
      name: "sign-up",
      className: "auth-form__btn-submit",
      onSubmit: onSignUp,
      inputs: [
        {
          inputContainerClass: "auth-form__input",
          inputClass: "auth-form__item",
          inputId: "email-input",
          inputName: "email",
          inputType: "text",
          value: "",
          inputPlaceholder: " ",
          inputLabel: "E-mail",
          validations:
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g,
        },
        {
          inputContainerClass: "auth-form__input",
          inputClass: "auth-form__item",
          inputId: "login-input",
          inputName: "login",
          inputType: "text",
          value: "",
          inputPlaceholder: " ",
          inputLabel: "Login",
          validations: /(?!^\d+$)^[A-Za-z0-9]{3,20}$/,
        },
        {
          inputContainerClass: "auth-form__input",
          inputClass: "auth-form__item",
          inputId: "name-input",
          inputName: "first_name",
          inputType: "text",
          value: "",
          inputPlaceholder: " ",
          inputLabel: "Name",
          validations: /[A-Za-zА-Яа-я]+$/,
        },
        {
          inputContainerClass: "auth-form__input",
          inputClass: "auth-form__item",
          inputId: "surname-input",
          inputName: "second_name",
          inputType: "text",
          value: "",
          inputPlaceholder: " ",
          inputLabel: "Surname",
          validations: /[A-Za-zА-Яа-я]+$/,
        },
        {
          inputContainerClass: "auth-form__input",
          inputClass: "auth-form__item",
          inputId: "phone-input",
          inputName: "phone",
          inputType: "text",
          value: "",
          inputPlaceholder: " ",
          inputLabel: "Phone number",
          validations: /^\+?\d{10,15}$/,
        },
        {
          inputContainerClass: "auth-form__input",
          inputClass: "auth-form__item",
          inputId: "password-input",
          inputName: "password",
          inputType: "password",
          inputPlaceholder: " ",
          value: "",
          inputLabel: "Password",
          validations: /^(?=.*\d)(?=.*[A-Z]).{8,40}$/,
        },
        {
          inputContainerClass: "auth-form__input",
          inputClass: "auth-form__item",
          inputId: "second-password-input",
          inputName: "second_password",
          inputType: "password",
          value: "",
          inputPlaceholder: " ",
          inputLabel: "Confirm password",
          validations: /^(?=.*\d)(?=.*[A-Z]).{8,40}$/,
        },
      ],
    });
    return this.compile(blockTemplate, { form: this.children.form });
  }
}
export const signup = new CreateAccount({});
