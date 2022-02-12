import { blockTemplate } from "./modal.tmpl";
import "./modal.scss";
import Block from "../../modules/block/Block";

type ModalProps = {}
export default class Modal extends Block <ModalProps> {
  constructor(props: ModalProps) {
    super("div", props);
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
