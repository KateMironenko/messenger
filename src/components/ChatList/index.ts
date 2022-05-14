import "./chatList.scss";
import Block from "../../modules/block/Block";
import { blockTemplate } from "./chatList.tmpl";
import Chat from "../Chat/index";


type ChatListProps = {};
export default class ChatList extends Block<ChatListProps> {
  constructor(props: ChatListProps) {
    super("div", props);
    
  }

  render() {
      this.children.inputs =  this.props.chats?  this.props.chats.map((chatProps: any) => {
        const chat: Chat = new Chat({
          name: chatProps.title,
        });
        return chat;
      }): []
    return this.compile(blockTemplate, {
      chatList: this.children.inputs
    });
  }
}
