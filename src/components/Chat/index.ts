import "./chat.scss";
import Block from "../../modules/block/Block";
import { blockTemplate } from "./chat.tmpl";

type ChatProps = {
  id: Number;
  name: string;
  avatar: string;
  imgWidth: string;
  events: Object;
};
export default class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super("div", props);
  }

  render() {
    return this.compile(blockTemplate, this.props);
  }
}
