import { Templator } from "../../../utils/templator/Templator.js";
import { blockTemplate } from "./chat.tmpl.js";
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
import { createModal } from "../../components/Modal/index.js";

const tmpl = new Templator(blockTemplate);

const context = {
  arrowImg: arrowImg,
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
};

export const chatTemplate = tmpl.compile(context);

export function createChartPage(mainPage) {
  mainPage.innerHTML = chatTemplate;
  createModal(
    "chat",
    "Add user",
    "Add",
    `<div class="auth-form__input">
    <input class="auth-form__item form__item_el_login item_modal-input" id="login-input" name="username" type="text" placeholder=" " required minlength="2" maxlength="40">
    <label for="username">Username</label>
    <span id="username-input-error" class="form__item-error"></span>
</div> `
  );
}
