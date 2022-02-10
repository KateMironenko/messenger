import "./upload.tmpl";
import Block from "../../modules/block/Block";
import { blockTemplate } from "./upload.tmpl";
import attachImg from "../../static/images/attach-icon.svg";

export default class UploadInput extends Block {
  attachImg: string;
  constructor(props: {} | undefined) {
    super("div", props);
    this.setProps({
      attachImg: attachImg,
    });
    this.attachImg = attachImg;
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
