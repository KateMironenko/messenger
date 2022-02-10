import { blockTemplate } from "./createAccount.tmpl";
import Block from "../../modules/block/Block";
import Form from "../../components/Form/index";
import "./createAccount.scss";

class CreateAccount extends Block {
    constructor(props: any) {
      super("div", props);
    }
  
    render() {
      this.children.form = new Form({
        formClass: this.props.formClass,
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
          },
          {
            inputContainerClass: "auth-form__input",
            inputClass: "auth-form__item",
            inputId: "login-input",
            inputName: "login",
            inputType: "text",
            inputPlaceholder: " ",
            inputLabel: "Login",
          },
          {
            inputContainerClass: "auth-form__input",
            inputClass: "auth-form__item",
            inputId: "name-input",
            inputName: "first_name",
            inputType: "text",
            inputPlaceholder: " ",
            inputLabel: "Name",
          },
          {
            inputContainerClass: "auth-form__input",
            inputClass: "auth-form__item",
            inputId: "surname-input",
            inputName: "second_name",
            inputType: "text",
            inputPlaceholder: " ",
            inputLabel: "Surname",
          },
          {
            inputContainerClass: "auth-form__input",
            inputClass: "auth-form__item",
            inputId: "phone-input",
            inputName: "phone",
            inputType: "text",
            inputPlaceholder: " ",
            inputLabel: "Phone number",
          },
          {
            inputContainerClass: "auth-form__input",
            inputClass: "auth-form__item",
            inputId: "password-input",
            inputName: "password",
            inputType: "password",
            inputPlaceholder: " ",
            inputLabel: "Password",
          },
          {
            inputContainerClass: "auth-form__input",
            inputClass: "auth-form__item",
            inputId: "second-password-input",
            inputName: "second_password",
            inputType: "password",
            inputPlaceholder: " ",
            inputLabel: "Confirm password",
          },
        ],
      });
      return this.compile(blockTemplate, { form: this.children.form });
    }
  }
  export const signup = new CreateAccount({
    formClass: "signup_form",
  });
  