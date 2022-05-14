import { blockTemplate } from "./profile.tmpl";
import "./profile.scss";
import backImg from "../../static/images/next-icon.svg";
import pictuteImg from "../../static/images/avatar-icon.svg";
import pictuteEditImg from "../../static/images/avatar-edit.svg";
import UserLogoutController from "../../../utils/controllers/user-logout";
import UserController from "../../../utils/controllers/user-info";
import Modal from "../../components/Modal/index";
import Form from "../../components/Form/index";
import UploadForm from "../../components/UploadForm/index";
import Block from "../../modules/block/Block";
import { connect } from "../../../utils/mydash/connect";

type ProfileProps = {
  email: string;
  first_name: string;
  login: string;
  second_name: string;
  display_name: string;
  phone: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  logout: Function;
  showModal: string;
  openAvatarModal: Function;
  editProfile: Function;
  avatar: string;
  onUserInfoChange: Function;
  onAvatarUpdate: Function;
  inputDisabled: string;
  onPasswordUpdate: Function;
  changePassword: Function;
};

const withUser = connect((state) => state.user);

function logout() {
  UserLogoutController.logout();
}

function onUserInfoChange(data: ProfileProps) {
  UserController.updateUser(data);
}

function onUserAvatarChange(data: FormData) {
  UserController.updateAvatar(data);
}

function onUserPasswordChange(data: ProfileProps) {
  UserController.updatePassword(data);
}
class Profile extends Block<ProfileProps> {
  constructor(props: any) {
    super("div", props);
    this.setProps({
      newPassword: "",
      confirmPassword: "",
      passwordFormClass: "profile__list profile__password-form",
      logout: logout,
      showModal: "",
      inputDisabled: "disabled",
      openAvatarModal: () => this.children.modal.openModal(),
      editProfile: () => {
        this.setProps({
          inputDisabled: "",
        });
        this.children.form.setProps({
          className: "profile__submit",
        });
      },
      onUserInfoChange: (data: ProfileProps) => {
        onUserInfoChange(data);
        this.setProps({
          inputDisabled: "disabled",
        });
        this.children.form.setProps({
          className: "profile__submit hide-btn",
        });
      },
      onAvatarUpdate: (data: FormData) => {
        onUserAvatarChange(data);
        this.children.modal.closeModal()
      },
      changePassword: () => {
        this.children.form.hide();
        this.children.passwordForm.show();
      },
      onPasswordUpdate: (data: ProfileProps) => {
        onUserPasswordChange(data);
        this.children.form.show();
        this.children.passwordForm.hide();
      },
    });

    UserController.getUser();
  }

  render() {
    this.children.modal = new Modal({
      modalBody: new UploadForm({
        inputName: "avatar",
        inputId: "avatar",
        formClass: "modal__body",
        btnName: "Change",
        type: "submit",
        className: "modal__submit-btn",
        onSubmit: this.props.onAvatarUpdate,
      }),
      header: "Update profile image",
      showModal: this.props.showModal,
    });

    this.children.form = new Form({
      formClass: "form-profile",
      btnName: "Save",
      type: "submit",
      onSubmit: this.props.onUserInfoChange,
      name: "save",
      className: "profile__submit hide-btn",
      inputs: [
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "email-input",
          inputName: "email",
          inputType: "text",
          inputDisabled: this.props.inputDisabled,
          inputPlaceholder: this.props.email,
          inputLabel: "Email",
          validations:
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g,
          value: this.props.email,
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "login-input",
          inputName: "login",
          inputType: "text",
          inputPlaceholder: this.props.login,
          inputLabel: "Login",
          inputDisabled: this.props.inputDisabled,
          validations: /(?!^\d+$)^[A-Za-z0-9]{3,20}$/,
          value: this.props.login,
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "first-name-input",
          inputName: "first_name",
          inputType: "text",
          inputDisabled: this.props.inputDisabled,
          inputPlaceholder: this.props.first_name,
          inputLabel: "Name",
          validations: /[A-Za-zА-Яа-я]+$/,
          value: this.props.first_name,
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "second-name-input",
          inputName: "second_name",
          inputType: "text",
          inputDisabled: this.props.inputDisabled,
          inputPlaceholder: this.props.second_name,
          inputLabel: "Surname",
          validations: /[A-Za-zА-Яа-я]+$/,
          value: this.props.second_name,
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "display-name-input",
          inputName: "display_name",
          inputType: "text",
          inputDisabled: this.props.inputDisabled,
          inputPlaceholder: this.props.display_name,
          inputLabel: "Name in chat",
          validations: /[A-Za-zА-Яа-я]+$/,
          value: this.props.display_name,
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "phone-input",
          inputName: "phone",
          inputType: "text",
          inputDisabled: this.props.inputDisabled,
          inputPlaceholder: this.props.phone,
          inputLabel: "Telephone",
          validations: /^\+?\d{10,15}$/,
          value: this.props.phone,
        },
      ],
    });

    this.children.passwordForm = new Form({
      formClass: "form-password",
      btnName: "Save",
      type: "submit",
      name: "save",
      onSubmit: this.props.onPasswordUpdate,
      className: "profile__submit",
      inputs: [
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "oldPassword-input",
          inputName: "oldPassword",
          inputType: "password",
          inputPlaceholder: "",
          inputLabel: "Old password",
          validations: /^(?=.*\d)(?=.*[A-Z]).{8,40}$/,
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "password-input",
          inputName: "newPassword",
          inputType: "password",
          inputPlaceholder: "",
          inputLabel: "New password",
          validations: /^(?=.*\d)(?=.*[A-Z]).{8,40}$/,
        },
        {
          inputContainerClass: "profile__item",
          inputClass: "profile__item-input",
          inputId: "password-confirm-input",
          inputName: "password",
          inputType: "password",
          inputPlaceholder: " ",
          inputLabel: "Confirm password",
          validations: /^(?=.*\d)(?=.*[A-Z]).{8,40}$/,
        },
      ],
    });

    this.children.passwordForm.hide();

    return this.compile(blockTemplate, {
      modal: this.children.modal,
      inputImg: this.children.inputImg,
      backImg: backImg,
      pictuteImg: this.props.avatar
        ? "https://ya-praktikum.tech/api/v2/resources" + this.props.avatar
        : pictuteImg,
      pictuteEditImg: pictuteEditImg,
      email: this.props.email,
      avatar: this.props.avatar,
      firstName: this.props.first_name,
      login: this.props.login,
      secondName: this.props.second_name,
      displayName: this.props.display_name,
      phone: this.props.phone,
      oldPassword: this.props.oldPassword,
      newPassword: this.props.newPassword,
      confirmPassword: this.props.confirmPassword,
      logout: this.props.logout,
      avatarButton: this.children.avatarButton,
      openAvatarModal: this.props.openAvatarModal,
      editProfile: this.props.editProfile,
      changePassword: this.props.changePassword,
    });
  }
}

export default withUser(Profile);
