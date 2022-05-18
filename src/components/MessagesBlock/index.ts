import Block from '../../modules/block/Block';
import {blockTemplate} from './messagesBlock.tmpl';
import checkedWhiteImg from '../../static/images/checked-icon-white.svg';
import checkedImg from '../../static/images/checked-icon.svg';
import Message from '../../components/Message/index';

type MessageProps = {
  messages: Array<any>;
};

function getTime(time: string) {
  const date = new Date(time);
  const hours = date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
  const minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
  return `${hours}:${minutes}`;
}

export default class MessagesBlock extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super(props, 'div');
  }

  render() {
    this.children.message = this.props.messages ?
      this.props.messages.filter(el => el.content) ?
        this.props.messages
          .reverse()
          .filter(el => el.content)
          .map((messageProps: any) => {
            const message: Message = new Message({
              name: messageProps.title,
              time: getTime(messageProps.time),
              checkedImg:
                  messageProps.user_id === window.userID ?
                    checkedImg :
                    checkedWhiteImg,
              isRead: messageProps.is_read ?
                messageProps.user_id === window.userID ?
                  'message-main__read' :
                  'message-main__read-white' :
                'message-main__non-read',
              messageType:
                  messageProps.user_id === window.userID ?
                    'outcome-message' :
                    'income-message',
              text: messageProps.content,
              events: {
                click: (event: Event) => {
                  event.preventDefault();
                }
              }
            });
            return message;
          }) :
        [] :
      [];
    return this.compile(blockTemplate, {
      message: this.children.message
    });
  }
}
