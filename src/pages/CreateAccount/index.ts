import { blockTemplate } from "./createAccount.tmpl";
import Block from "../../modules/block/Block";
import Form from "../../components/Form/index";
import "./createAccount.scss";

type CreateAccountProps = {};
class CreateAccount extends Block<CreateAccountProps> {
  constructor(props: CreateAccountProps) {
    super("div", props);
  }

  render() {
    this.children.form = new Form({
      formClass: "signup_form",
      btnName: "Sign up",
      type: "submit",
      name: "sign-up",
      className: "auth-form__btn-submit",
      inputs: [
        {
          inputContainerClass: "auth-form__input",
          inputClass: "auth-form__item",
          inputId: "email-input",
          inputName: "email",
          inputType: "text",
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
          inputLabel: "Password",
          validations: /^(?=.*\d)(?=.*[A-Z]).{8,40}$/,
        },
        {
          inputContainerClass: "auth-form__input",
          inputClass: "auth-form__item",
          inputId: "second-password-input",
          inputName: "second_password",
          inputType: "password",
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
