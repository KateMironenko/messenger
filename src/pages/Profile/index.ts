import { blockTemplate } from "./profile.tmpl";
import "./profile.scss";
import attachImg from "../../static/images/attach-icon.svg";
import backImg from "../../static/images/next-icon.svg";
import pictuteImg from "../../static/images/avatar-icon.svg";
import pictuteEditImg from "../../static/images/avatar-edit.svg";
import Modal from "../../components/Modal/index";
import UploadInput from "../../components/UploadInput/index";
import Form from "../../components/Form/index";

import Block from "../../modules/block/Block";

class Profile extends Block {
  constructor(props: any) {
    super("div", props);
  }

  render() {
    this.children.modal = new Modal({
      modalBody: new UploadInput({}),
      header: "Update profile image",
      btnName: "Change",
    });

    this.children.form = new Form({
      formClass: this.props.formClass,
      btnName: "Save",
      type: "submit",
      name: "save",
      className: "profile__submit",
      inputs: [
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "email-input",
          inputName: "email",
          inputType: "text",
          inputPlaceholder: "kate@ya.ru",
          inputLabel: "Email",
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "login-input",
          inputName: "login",
          inputType: "text",
          inputPlaceholder: "kate",
          inputLabel: "Login",
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "first-name-input",
          inputName: "first_name",
          inputType: "text",
          inputPlaceholder: "Kate",
          inputLabel: "Name",
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "second-name-input",
          inputName: "second_name",
          inputType: "text",
          inputPlaceholder: "Surname",
          inputLabel: "Surname",
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "display-name-input",
          inputName: "display_name",
          inputType: "text",
          inputPlaceholder: "Kate",
          inputLabel: "Name in chat",
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "phone-input",
          inputName: "phone",
          inputType: "text",
          inputPlaceholder: "+7 (909) 967 30 30",
          inputLabel: "Telephone",
        },
      ],
    });

    this.children.passwordForm = new Form({
      formClass: this.props.passwordFormClass,
      btnName: "Save",
      type: "submit",
      name: "save",
      className: "profile__submit",
      inputs: [
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "oldPassword-input",
          inputName: "oldPassword",
          inputType: "password",
          inputPlaceholder: " ",
          inputLabel: "Old password",
          value: 'password'
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "password-input",
          inputName: "password",
          inputType: "password",
          inputPlaceholder: "",
          inputLabel: "New password",
          
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "password-confirm-input",
          inputName: "password",
          inputType: "password",
          inputPlaceholder: " ",
          inputLabel: "Confirm password",
        },
      ],
    });

    return this.compile(blockTemplate, {
      modal: this.children.modal,
      inputImg: this.children.inputImg,
      backImg: this.props.backImg,
      pictuteImg: this.props.pictuteImg,
      pictuteEditImg: this.props.pictuteEditImg,
      email: this.props.email,
      firstName: this.props.firstName,
      login: this.props.login,
      secondName: this.props.secondName,
      displayName: this.props.displayName,
      phone: this.props.phone,
      oldPassword: this.props.oldPassword,
      newPassword: this.props.newPassword,
      confirmPassword: this.props.confirmPassword,
    });
  }
}
export const profile = new Profile({
  attachImg: attachImg,
  backImg: backImg,
  pictuteImg: pictuteImg,
  pictuteEditImg: pictuteEditImg,
  email: "kate@ya.ru",
  firstName: "Kate",
  login: "kate",
  secondName: "fff",
  displayName: "Kate",
  phone: "+7 (909) 967 30 30",
  oldPassword: "password",
  newPassword: "",
  confirmPassword: "",
  passwordFormClass: "profile__list profile__password-form"
});
