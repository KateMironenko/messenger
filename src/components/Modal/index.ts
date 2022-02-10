import { blockTemplate } from "./modal.tmpl";
import "./modal.scss";
import attachImg from "../../static/images/attach-icon.svg";
import Block from "../../modules/block/Block";

export default class Modal extends Block {
  constructor(props: any) {
    super("div", props);
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}



// const tmpl: Templator = new Templator(blockTemplate);

// const context: {
//   header: string;
//   btnName: string;
//   body: string;
//   attachImg: string;
// } = {
//   header: "",
//   btnName: "",
//   body: "",
//   attachImg: attachImg,
// };

// export function createModal(
//   pageId: string,
//   header: string,
//   btnName: string,
//   bodyTmpl: string
// ): undefined | void {
//   if (!pageId || !header || !btnName || !bodyTmpl) {
//     return undefined;
//   }
//   context.header = header;
//   context.btnName = btnName;

//   const modalTemplate = tmpl.compile(context);
//   const body = new Templator(bodyTmpl).compile(context);
//   const element = document.querySelector(`#${pageId}`);
//   if (element) {
//     element.insertAdjacentHTML("afterbegin", modalTemplate);
//   }

//   document.querySelector(".modal__body").insertAdjacentHTML("afterbegin", body);
// }
