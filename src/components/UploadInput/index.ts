import "./upload.tmpl";
import Block from "../../modules/block/Block";
import { blockTemplate } from "./upload.tmpl";
import attachImg from "../../static/images/attach-icon.svg";

type UploadInputProps = {};
export default class UploadInput extends Block<UploadInputProps> {
  constructor(props: UploadInputProps) {
    super("div", props);
    this.setProps({
      attachImg: attachImg,
    });
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
