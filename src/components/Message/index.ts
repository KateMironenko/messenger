import "./message.scss";
import Block from "../../modules/block/Block";
import { blockTemplate } from "./message.tmpl";

export default class Message extends Block {
  constructor(props: {} | undefined) {
    super("div", props);
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
