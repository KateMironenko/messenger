import { Templator } from "../../../utils/templator/Templator.js";
import { blockTemplate } from "./modal.tmpl.js";
import "./modal.scss";
import attachImg from "../../static/images/attach-icon.svg";

const tmpl = new Templator(blockTemplate);

const context = {
  header: "",
  btnName: "",
  body: "",
  attachImg: attachImg,
};

export function createModal(pageId, header, btnName, bodyTmpl) {
  if (!pageId || !header || !btnName || !bodyTmpl) {
    return undefined;
  }
  context.header = header;
  context.btnName = btnName;

  const modalTemplate = tmpl.compile(context);
  const body = new Templator(bodyTmpl).compile(context);

  document
    .querySelector(`#${pageId}`)
    .insertAdjacentHTML("afterbegin", modalTemplate);
  document.querySelector(".modal__body").insertAdjacentHTML("afterbegin", body);
}
