import { Templator } from "../../../utils/templator/Templator.js";
import { blockTemplate } from "./profile.tmpl.js";
import "./profile.scss";
import attachImg from "../../static/images/attach-icon.svg";
import backImg from "../../static/images/next-icon.svg";
import pictuteImg from "../../static/images/avatar-icon.svg";
import pictuteEditImg from "../../static/images/avatar-edit.svg";
import { createModal } from "../../components/Modal/index.js";

const tmpl = new Templator(blockTemplate);

const context = {
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
};

export const profileTemplate = tmpl.compile(context);

export function createProfilePage(mainPage) {
  mainPage.innerHTML = profileTemplate;
  createModal(
    "profile",
    "Upload file",
    "Change",
    `<div class="file-form__input">
    <label for="avatar" class="file-form__input-lable">
    <img src="{{ attachImg }}" /> Select image
</label>
    <input class="file-form__item form__item_el_file" id="avatar" name="avatar" type="file"  required minlength="2" maxlength="40">
    <span id="file-input-error" class="form__item-error"></span>
</div> `
  );
}
