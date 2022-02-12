import { blockTemplate } from "./chat.tmpl";
import "./chat.scss";
import arrowImg from "../../static/images/arrow.svg";
import loupeImg from "../../static/images/loupe.svg";
import optionImg from "../../static/images/option-icon.svg";
import addImg from "../../static/images/add-icon.svg";
import removeImg from "../../static/images/remove-icon.svg";
import checkedImg from "../../static/images/checked-icon.svg";
import checkedWhiteImg from "../../static/images/checked-icon-white.svg";
import trashImg from "../../static/images/trash-icon.svg";
import editImg from "../../static/images/edit-icon.svg";
import copyImg from "../../static/images/copy-icon.svg";
import attachImg from "../../static/images/attach-icon.svg";
import nextImg from "../../static/images/next-icon.svg";
import pictuteImg from "../../static/images/img-icon.svg";
import fileImg from "../../static/images/file-icon.svg";
import locationImg from "../../static/images/location-icon.svg";
import Form from "../../components/Form/index";
import Message from "../../components/Message/index";
import Block from "../../modules/block/Block";

type ChatProps = {};
class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super("div", props);
  }

  render() {
    this.children.message = new Message({});
    this.children.form = new Form({
      formClass: "form-message",
      btnName: "Add",
      type: "submit",
      name: "add-user",
      className: "auth-form__btn-submit",
      inputs: [
        {
          inputContainerClass: "auth-form__input",
          inputClass: "auth-form__item",
          inputId: "username-input",
          inputName: "login",
          inputType: "text",
          inputPlaceholder: " ",
          inputLabel: "Username",
          validations: /(?!^\d+$)^[A-Za-z0-9]{3,20}$/,
        },
      ],
    });
    return this.compile(blockTemplate, {
      modal: this.children.form,
      message: this.children.message,
      arrowImg: arrowImg,
      modalHeader: "Add user",
      loupeImg: loupeImg,
      optionImg: optionImg,
      addImg: addImg,
      removeImg: removeImg,
      checkedImg: checkedImg,
      checkedWhiteImg: checkedWhiteImg,
      trashImg: trashImg,
      editImg: editImg,
      copyImg: copyImg,
      attachImg: attachImg,
      nextImg: nextImg,
      pictuteImg: pictuteImg,
      fileImg: fileImg,
      locationImg: locationImg,
    });
  }
}
export const chat = new Chat({});
