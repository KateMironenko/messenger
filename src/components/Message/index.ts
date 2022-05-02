import "./message.scss";
import Block from "../../modules/block/Block";
import { blockTemplate } from "./message.tmpl";

type MessageProps = {};
export default class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super("div", props);
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
